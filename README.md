# CampCraze Server

## [Live URL](https://camp-craze-backend.vercel.app/)

## Technologies

-   **Programming Language**: TypeScript
-   **Web Framework**: Express.js
-   **Database**: MongoDB
-   **ODM Library**: Mongoose
-   **Validation**: Zod Validation
-   **Others**:
    -   NPM Package: cors
    -   http-status

## Features

-   Product Management: Create, get, update, and delete products.
-   Advanced Search: Search, filter, and sort products.

## How to run this application locally

## Modify the .env.example file.

1. Clone the repository:

```bash
    git clone https://github.com/MehediHaassan1/camp-craze-backend.git
```

2. Navigate to the folder

```bash
  cd repository-name
```

3. Install dependencies:

-   Using npm:

```bash
    npm install
```

-   Using yarn:

```bash
    yarn install
```

4. Run the project:

-   Using npm:

```bash
    npm run dev
```

-   Using yarn:

```bash
    yarn start dev
```

# Routes

## Product Routes (/products)

<strong>POST</strong>

```bash
    /products
```

<strong>Description: </strong>
Create a new product.
<br>
<strong>Validation:</strong> The request is validated using the <code>createProductValidationSchema</code>.

<strong>GET</strong>

```bash
    /products
```

<strong>Description: </strong>
Fetch a list of all products.
<br>

<strong>GET</strong>

```bash
    /products/:id
```

<strong>Description: </strong>
Fetch a single product by its id.
<br>

<strong>PATCH</strong>

```bash
    /products/:id
```

<strong>Description: </strong>
Update the details of a product by its id.
<br>
<strong>Validation: </strong>
The request is validated using the <code>updateProductValidationSchema</code>.

<strong>DELETE</strong>

```bash
    /products/:id
```

<strong>Description: </strong>
Delete a product by its id.
<br>

 ## Order Routes (/order)

<strong>PATCH</strong>

```bash
    /products/:id
```

<strong>Description: </strong>
Update stock based on order data (complete an order).
