# BotzStore

BotzStore is a frontend application for managing and displaying products. This project is built using React and TypeScript, leveraging Material-UI for UI components.

## Project Structure

```
botzstore_frontend
├── src
│   ├── components
│   │   ├── ProductCard.tsx       # Component to display individual product details
│   ├── pages
│   │   ├── ProductPage.tsx       # Page to fetch and display a specific product
│   ├── services
│   │   ├── ProductService.ts      # Service to handle API requests for product data
├── package.json                   # NPM package configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
```

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd botzstore_frontend
npm install
```

## Usage

To run the application in development mode, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser.

## Features

- Display product information using the `ProductCard` component.
- Fetch product details from the backend using the `ProductService`.
- Manage product quantity with increment and decrement functionality.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.