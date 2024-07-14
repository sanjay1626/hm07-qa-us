# Sprint 7 project
# Urban Grocers API Testing

## Description

This project contains a series of automated tests for the Urban Grocers API. These tests are designed to ensure that the API endpoints for managing products, couriers, and kits are functioning correctly. The tests cover GET, POST, PUT, and DELETE requests to verify status codes and response bodies.

## Technologies and Techniques Used

- **JavaScript**: The primary programming language used for writing tests.
- **Jest**: A JavaScript testing framework used to run and manage the tests.
- **Fetch API**: Used for making HTTP requests to the API.
- **Node.js**: The runtime environment for executing the tests.

## Instructions to Run the Tests

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/sanjay1626/hm07-qa-us.git
    cd hm07-qa-us.git
    ```

2. **Install Dependencies**:
    Make sure you have Node.js installed. Then, install the required npm packages by running:
    ```sh
    npm install
    ```

3. **Set Up Configuration**:
    Ensure you have a `config.js` file in the root directory with the following content:
    ```js
    module.exports = {
        API_URL: 'https://your-api-url.com'
    };
    ```

4. **Run the Tests**:
    To run all the tests, execute the following command:
    ```sh
    npx jest
    ```

5. **Individual Test Files**:
    You can also run specific test files by specifying the file name. For example:
    ```sh
    npx jest tests/getHandlers.test.js
    npx jest tests/postHandlers.test.js
    npx jest tests/putHandlers.test.js
    npx jest tests/deleteHandlers.test.js
    ```

## Test Descriptions

### GET Requests

- **Tests the status code and response body for fetching couriers**:
    - `tests/getHandlers.test.js`

### POST Requests

- **Tests the status code and delivery cost for checking couriers**:
    - `tests/postHandlers.test.js`

### PUT Requests

- **Tests the status code and response body for updating product prices**:
    - `tests/putHandlers.test.js`

### DELETE Requests

- **Tests the status code and response body for deleting kits**:
    - `tests/deleteHandlers.test.js`

## Example API Endpoints Tested

- **GET /api/v1/warehouses**
- **POST /api/v1/couriers/check**
- **PUT /api/v1/products/:id**
- **DELETE /api/v1/kits/:id**



