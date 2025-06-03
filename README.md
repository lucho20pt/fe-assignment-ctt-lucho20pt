# CTT Exercise - Frontend Typescript

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

### State Management

1. Use Redux to manage the state of products.
2. Minimize API calls by caching data in the Redux store.
3. Implement optimistic updates for better user experience.

---

## Development Process

1. Follow Test Driven Development (TDD) to ensure code quality.
2. Use Trunk Based Development (TBD) for efficient collaboration and integration.
3. Set up a local development environment using Docker and Docker Compose.

---

## Docker Setup

### Prerequisites

- Docker and Docker Compose installed.

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
