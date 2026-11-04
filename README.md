# Vitest and Supertest API Tests

A collection of automated tests for the ServeRest API, built with Vitest and Supertest. The tests cover login, user creation and listing, and product creation and deletion.

## 📦 Technologies

- `Vitest`
- `Supertest`
- `JavaScript`

## 🧪 What It Does

This project uses the ServeRest API as a target for practicing automated API testing. Instead of testing these features manually in Postman, the tests send API requests and verify the responses using code.

## ⚙️ The Process

I started by studying the ServeRest API documentation and setting up Vitest and Supertest to automate the API tests.

First, I created tests for the login endpoint. They send login credentials to the API using Supertest's `.post()` and `.send()` methods. The tests then check that the response has a `200` status code, includes an authorization token, and contains a success message.

To avoid repeating code, I created a utility file with the API's base URL and functions that generate random user and product data. I also added a `login` helper that sends an email and password to the `/login` endpoint and returns the authorization token. The product tests use this helper to authenticate their requests.

For the product tests, I use the `login` helper to obtain an authorization token and the `randomProduct` function to generate product data. I then send an authenticated request to create a product and check that the response has a `201` status code and a success message. I also test deleting a product and verify that the API returns a `200` status code and a success message.

Finally, I created tests for the user endpoints. One test requests the list of users and checks that the response has a `200` status code and that the users are returned as an array. Another test generates a user with the `randomUser` function, sends the data to the API, and checks that the response has a `201` status code, includes the created user's ID, and contains a success message.

## 🧠 What I Learned

During this project, I learned how to use Vitest and Supertest to test an API with code instead of relying only on Postman. I practiced sending requests to API endpoints, checking status codes and response data, and organizing tests for different features. I also learned how to create reusable helper functions for tasks such as generating test data and logging in to obtain an authorization token.

## 🚀 Additional Test Cases

Some tests I would like to add:

- Edit a user.
- Search for a user by ID.
- Edit a product.
- Search for a product by ID.
- Test the cart endpoints: list carts, search for a cart by ID, create a cart, delete a cart, and delete a cart while returning its products to stock.
- Add tests for invalid input, missing fields, and unauthorized requests.

## ▶️ Running the Tests

Install the project dependencies:

```bash
npm install

```
## To run the Login Test:
```bash
npx vitest run tests/login.test.js
```
## To run the Product Test:
```bash
npx vitest run tests/produtos.test.js
```
## To run the Users Test:
```bash
npx vitest run tests/usuarios.test.js
```



