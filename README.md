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

# Usage

#### 1. <u>Create a new product</u>

-   **Endpoint:** ( POST ) `/api/products`
-   **Description:** Create a new product.
-   **Request Body:**

    ```json
    {
        "name": "Insulated Sleeping Bag",
        "price": 89.99,
        "stock": 100,
        "description": "Keep warm and comfortable with this insulated sleeping bag. Suitable for temperatures down to -10°C.",
        "category": "Sleeping Gear",
        "ratings": 4.7,
        "coverImage": "https://i.ibb.co/BnqHRZ5/Insulated-Sleeping-Bag.jpg",
        "images": [
            "https://i.ibb.co/DQDRBn4/Insulated-Sleeping-Bag-1.jpg",
            "https://i.ibb.co/bsdCFkS/images.jpg"
        ],
        "tag": "new"
    }
    ```

#### 2. <u>Get all products</u>

-   **Endpoint:** ( GET ) `/api/products`
-   **Description:** Get all Products.

#### 3. <u>Get single product</u>

-   **Endpoint:** ( GET ) `/api/products/:id`
-   **Description:** Get a single Product.


#### 4. <u>Update single product</u>

-   **Endpoint:** ( PATCH ) `/api/products/:id`
-   **Description:** Update a single Product.
-   **Request Body:**

    ```json
    {
        "name": "Insulated Sleeping Bag updated",
        "stock": 50,
    }
    ```

#### 5. <u>Delete single product</u>

-   **Endpoint:** ( DELETE ) `/api/products/:id`
-   **Description:** Delete a single Product.

