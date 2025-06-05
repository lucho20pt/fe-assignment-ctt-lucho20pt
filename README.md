# CTT Exercise - Frontend Typescript

## Table of Contents

1. [Overview](#overview)
2. [Constraints](#constraints)
3. [Important Note](#important-note)
4. [Workflow](#workflow)
   - [Fetch Products](#fetch-products)
   - [CRUD Operations](#crud-operations)
5. [Installation Instructions](#installation-instructions)
   - [Prerequisites](#prerequisites)
   - [Local Setup Without Docker](#local-setup-without-docker)
6. [Docker Setup](#docker-setup)
   - [Running the Project](#running-the-project)
   - [Stopping the Services](#stopping-the-services)
   - [Troubleshooting](#troubleshooting)
7. [Testing Instructions](#testing-instructions)
8. [Deployment Information](#deployment-information)
   - [Vercel Deployment](#vercel-deployment)
9. [Redux Enhancements](#redux-enhancements)
10. [Error Handling Improvements](#error-handling-improvements)
11. [API Integration](#api-integration)
12. [Assumptions](#assumptions)
13. [Improvements for Production](#improvements-for-production)

---

## Overview

This project is a frontend application built with TypeScript and React for managing products. It integrates with a backend API to perform CRUD operations on products and uses Redux for state management. The application is containerized using Docker and Docker Compose for easy setup and deployment.

---

## Constraints

During the development of this project, I adhered to the following constraints:

- **Tooling**: I was constrained to use the tools and dependencies explicitly mentioned in the requirements. For example:
  - **React**: Used as the primary framework for building the frontend.
  - **Redux**: Used for state management.
  - **Docker**: Used for containerization.
- **Exclusions**: I avoided using alternative tools or dependencies such as Vite, Next.js, or other modern frameworks/libraries not specified in the requirements.
- **Focus**: The development process focused on meeting the requirements without introducing unnecessary complexity or external dependencies.

---

## Important Note

The application relies on Docker to fetch products from the backend API. If you run the application locally using `npm start` or `npm run dev`, the backend API (`http://localhost:8081/api`) will not be available, and the product list will not load. Ensure Docker is running to access the backend services.

---

## Workflow

### Fetch Products

1. On app load, fetch the list of products from the API.
2. Store the fetched products in the Redux store.
3. Display the products using the `ProductList` and `ProductItem` components.

### CRUD Operations

1. Use the `ProductForm` component for creating and editing products.
2. Use the `ProductDetails` component for viewing detailed information about a product.
3. Dispatch Redux actions for API calls and state updates:
   - `ADD_PRODUCT`: Add a new product.
   - `UPDATE_PRODUCT`: Modify an existing product.
   - `DELETE_PRODUCT`: Remove a product.
4. Update the Redux store after successful API responses.

---

## Installation Instructions

### Prerequisites

- Node.js and npm installed.
- Docker and Docker Compose installed.

### Local Setup Without Docker

1. Clone the repository:

   ```bash
   git clone https://github.com/lucho20pt/fe-assignment-ctt-lucho20pt.git
   cd fe-assignment-ctt-lucho20pt
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. **Note**: The product list will not load unless Docker is running.

---

## Docker Setup

### Running the Project

1. Build and run the services:

   ```bash
   docker-compose up --build
   ```

2. Access the services:
   - Frontend: [http://localhost:8080](http://localhost:8080)
   - Backend: [http://localhost:8081/api/products.json](http://localhost:8081/api/products.json)

### Stopping the Services

To stop the services:

```bash
docker-compose down
```

### Troubleshooting

- Use `docker-compose logs` to view logs for both services.
- Restart specific services:
  ```bash
  docker-compose restart frontend
  docker-compose restart backend
  ```

---

## Testing Instructions

1. Run the test suite:

   ```bash
   npm test
   ```

2. Check test coverage:

   ```bash
   npm run test:coverage
   ```

3. Ensure all components, utilities, and Redux actions are covered by tests.

---

## Deployment Information

### Vercel Deployment

1. Push the code to a GitHub repository.
2. Connect the repository to Vercel.
3. Configure environment variables in Vercel for the backend API URL (`API_BASE_URL`).
4. Deploy the application.

---

## Redux Enhancements

- Improved `productReducer` to handle `ADD_PRODUCT`, `UPDATE_PRODUCT`, and `DELETE_PRODUCT` actions.
- Enhanced type safety for `RootState` and `ProductAction`.

---

## Error Handling Improvements

- Updated `ErrorBoundary` to suppress `console.error` logs during tests for cleaner output.

---

## API Integration

- Enhanced `fetchProducts` action to handle HTTP errors gracefully and ensure proper type safety.

---

## Assumptions

1. **Backend API**:

   - The backend API is assumed to be running locally on `http://localhost:8081/api/products.json` as specified in the requirements.
   - No authentication or authorization is required for API access.

2. **Canonical Schema**:

   - The product schema provided in the requirements is strictly followed, including UUIDs for `id` and `categories`.

3. **Third-Party Dependencies**:

   - Only the explicitly allowed dependencies (`React`, `Redux`, `React-Redux`, `Webpack`, and testing libraries) are used.

4. **Docker Requirement**:

   - The application relies on Docker for running the backend API, and the frontend will not load products without it.

5. **Environment**:
   - The application is developed and tested in a local development environment using Node.js and Docker.

---

## Improvements for Production

1. **Backend Hosting**:

   - Host the backend API on a cloud platform (e.g., AWS, Azure, or Google Cloud) to eliminate the dependency on Docker for production.

2. **Environment Variables**:

   - Use environment variables to dynamically configure the API base URL for different environments (e.g., development, staging, production).

3. **Error Handling**:

   - Implement more robust error handling for API failures, including retry mechanisms and user-friendly error messages.

4. **Security**:

   - Add authentication and authorization mechanisms to secure API access.

5. **Performance**:

   - Optimize the frontend for performance by implementing lazy loading for components and code splitting.

6. **Testing**:

   - Increase test coverage for edge cases and integrate end-to-end testing using tools like Cypress.

7. **Accessibility**:

   - Ensure the application meets accessibility standards (e.g., WCAG 2.1).

8. **Styling**:

   - Use a CSS-in-JS library (e.g., styled-components) or a utility-first framework (e.g., Tailwind CSS) for scalable and maintainable styling.

9. **Pipeline Enhancements**:

   - Extend the GitHub Actions pipeline to include automated deployments and security checks.

10. **Monitoring**:
    - Integrate monitoring tools (e.g., Sentry, Datadog) to track errors and performance in production.
