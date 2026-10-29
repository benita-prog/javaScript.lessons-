"use strict";

// One array is used as the application's in-memory catalogue after XML is parsed.
let products = [];
const results = document.querySelector("#product-results");
const count = document.querySelector("#product-count");
const searchForm = document.querySelector("#product-search-form");
const codeInput = document.querySelector("#product-code");
const message = document.querySelector("#search-message");
const showAllButton = document.querySelector("#show-all-button");

/** Converts a <product> XML element into an easy-to-use JavaScript object. */
function xmlProductToObject(productNode) {
  const read = (tagName) =>
    productNode.querySelector(tagName).textContent.trim();
  return {
    code: productNode.getAttribute("code"),
    category: read("category"),
    name: read("name"),
    description: read("description"),
    quantity: Number(read("quantity")),
    unitPrice: Number(read("unitPrice")),
  };
}

/** Displays cards for supplied products. */
function renderProducts(productsToRender) {
  results.replaceChildren();
  count.textContent = `${productsToRender.length} product${productsToRender.length === 1 ? "" : "s"} shown`;
  productsToRender.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    const stockText =
      product.quantity === 0 ? "Out of stock" : `${product.quantity} in stock`;
    card.innerHTML = `<p class="product-category">${product.category}</p><h3>${product.name}</h3><p class="product-code">Code: ${product.code}</p><p class="product-description">${product.description}</p><div class="product-meta"><span class="${product.quantity === 0 ? "out-of-stock" : ""}">${stockText}</span><strong>€${product.unitPrice.toFixed(2)}</strong></div>`;
    results.append(card);
  });
}
function setMessage(text = "", type = "") {
  message.textContent = text;
  message.className = `status-message ${type}`;
}

async function loadProducts() {
  try {
    const response = await fetch("Products.xml");
    if (!response.ok) throw new Error("The product file could not be loaded.");
    const xml = new DOMParser().parseFromString(
      await response.text(),
      "application/xml",
    );
    if (xml.querySelector("parsererror"))
      throw new Error("The product file contains invalid XML.");
    products = [...xml.querySelectorAll("product")].map(xmlProductToObject);
    renderProducts(products);
  } catch (error) {
    setMessage(error.message, "error");
    count.textContent = "No products available";
  }
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const code = codeInput.value.trim();
  if (!/^\d{3}-\d{2}$/.test(code)) {
    setMessage("Enter a product code in the format 123-45.", "error");
    return;
  }
  const product = products.find((item) => item.code === code);
  if (!product) {
    renderProducts([]);
    setMessage(`No product was found with code ${code}.`, "error");
    return;
  }
  renderProducts([product]);
  setMessage(`Product ${code} found.`, "success");
});
showAllButton.addEventListener("click", () => {
  codeInput.value = "";
  renderProducts(products);
  setMessage();
});
loadProducts();
