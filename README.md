# Northstar Supply Web Application

This project is a two-page web application created for Part A of the Web Application Development assignment. It demonstrates how a browser can read structured data from both XML and JSON sources.

## What has been implemented

- A responsive navigation menu connecting the two pages.
- A product catalogue page that reads ten products from an XML file.
- A product-code search that shows the matching product or a helpful not-found message.
- A weather page that sends a GET request to WeatherAPI and reads the JSON response.
- Form validation and clear messages for missing or invalid input.
- Shared CSS styling so both pages look consistent on desktop and mobile.
- Short code comments that explain the main JavaScript decisions.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Product catalogue page and XML search form. |
| `Products.xml` | The ten-product data source. |
| `products.js` | Loads, parses, displays and searches the XML data. |
| `weather.html` | Weather search page. |
| `weather.js` | Requests and displays current WeatherAPI JSON data. |
| `style.css` | Shared responsive styling. |

## Application flow

### Product catalogue flow

1. The visitor opens `index.html`.
2. `products.js` uses `fetch()` to load `Products.xml`.
3. `DOMParser` reads the XML and turns each `<product>` element into a JavaScript object.
4. The application renders a product card for every product.
5. When a visitor searches, the code is checked against the required `123-45` format.
6. The matching product is shown, or the application explains that no product was found.

### Weather flow

1. The visitor opens `weather.html` and enters a city plus a WeatherAPI key.
2. The page first checks that both fields have a value.
3. `weather.js` builds the GET request using `URLSearchParams`, which safely handles city names with spaces.
4. WeatherAPI returns current conditions as JSON.
5. The application either displays temperature, feels-like temperature, humidity and wind speed, or shows a clear error message.

## How to run the project

Run the project through a local web server. Opening `index.html` directly from the file system can prevent the browser from loading `Products.xml`.

1. Open this folder in Visual Studio Code.
2. Install the **Live Server** extension if needed.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Use the navigation links to switch between Products and Weather.

## Using the weather page safely

Create a free WeatherAPI key at [WeatherAPI](https://www.weatherapi.com/), then paste it into the form only when demonstrating the page. The key is not stored in the source code or saved by the application. Do not permanently add a personal API key to `weather.js`.

## Updating products

To add a product, copy an existing `<product>` line in `Products.xml` and change its values. Keep these rules:

- `code` must be unique and have the format `123-45`.
- `quantity` must be a whole number of zero or more.
- `unitPrice` must be zero or more, for example `2.50`.
- Keep the XML opening and closing tags unchanged.
