function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0)
        resolve({ id: id, name: "Ada" }); // success
      else reject(new Error("Invalid id")); // failure
    }, 5000);
  });
}

getUser(1)
  .then((user) => {
    console.log("Got", user.name); // this one fails...
  })
  .catch((err) => console.log("Error:", err.message)) // ...so we land here
  .finally(() => console.log("Done"));
// Got Ada
// Error: Invalid id
// Done

//Async function

function getNewUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id: id, name: "Ada" });
      else reject(new Error("Invalid id"));
    }, 3000);
  });
}

async function showUser() {
  try {
    const user = await getNewUser(1); // wait here for the result
    console.log("Got", user.name);
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    console.log("Finished");
  }
}

showUser();
console.log("This prints first, showUser is still waiting");
// This prints first, showUser is still waiting
// Got Ada
// Error: Invalid id
// Finished