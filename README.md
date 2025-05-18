# MISW4403-Parcial-Practico

A RESTful API for managing restaurants and dishes, built with NestJS and TypeORM.

## Overview

This API provides endpoints to manage restaurants, dishes, and the relationships between them. It allows you to perform CRUD operations (Create, Read, Update, Delete) on these entities.

## Features

- **Restaurants Management**: Create, read, update, and delete restaurant information
- **Dishes Management**: Create, read, update, and delete dish information 
- **Restaurant-Dish Association**: Associate dishes with restaurants and vice versa

## Tech Stack

- **Framework**: NestJS
- **Database**: SQLite
- **ORM**: TypeORM
- **Validation**: Class Validator

## API Endpoints

### Restaurants

- `GET /restaurants` - Get all restaurants
- `GET /restaurants/:id` - Get a specific restaurant by ID
- `POST /restaurants` - Create a new restaurant
- `PUT /restaurants/:id` - Update an existing restaurant
- `DELETE /restaurants/:id` - Delete a restaurant

### Dishes

- `GET /dishes` - Get all dishes
- `GET /dishes/:id` - Get a specific dish by ID
- `POST /dishes` - Create a new dish
- `PUT /dishes/:id` - Update an existing dish
- `DELETE /dishes/:id` - Delete a dish

### Restaurant-Dish Relationships

- `GET /restaurants/:restaurantId/dishes` - Get all dishes associated with a restaurant
- `GET /restaurants/:restaurantId/dishes/:dishId` - Get a specific dish from a restaurant
- `POST /restaurants/:restaurantId/dishes` - Add an existing dish to a restaurant
- `PUT /restaurants/:restaurantId/dishes` - Update all dishes associated with a restaurant
- `DELETE /restaurants/:restaurantId/dishes/:dishId` - Remove a dish from a restaurant

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository
2. Install dependencies:
```shell script
npm install
```

3. Start the development server:
```shell script
npm run start:dev
```


## Testing

The API includes Postman collections for testing all endpoints:

- `MISW4403 Parcial Practico - Restaurants.postman_collection.json` - Tests for restaurant endpoints
- `MISW4403 Parcial Practico - Dishes.postman_collection.json` - Tests for dish endpoints
- `MISW4403 Parcial Practico - Restaurants Dishes.postman_collection.json` - Tests for relationship endpoints

Import these collections into Postman to test the API functionality.

## Development

The application uses TypeORM with SQLite for database operations. The database file is `restaurant.db` in the root directory.

## License

This project is licensed under the MIT License.


### Notes

Thanks,
Miguel Angel Avila Torres
