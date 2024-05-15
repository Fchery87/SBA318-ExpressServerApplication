# Recipe Book

This project is a Recipe Book application built using Node.js and Express. It allows users to view, create, update, and delete recipes. Additionally, users can browse recipes by category.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- View all recipes
- View recipes by category
- Add new recipes
- Update existing recipes
- Delete recipes
- Error handling middleware
- Custom logging middleware

## API Endpoints

### Users

- `GET /users`: Get all users
- `GET /users/:userId`: Get a single user by ID
- `POST /users`: Create a new user
- `PUT /users/:userId`: Update a user by ID
- `DELETE /users/:userId`: Delete a user by ID

### Recipes

- `GET /recipes`: Get all recipes
- `GET /recipes/:recipeId`: Get a single recipe by ID
- `POST /recipes`: Create a new recipe
- `PUT /recipes/:recipeId`: Update a recipe by ID
- `DELETE /recipes/:recipeId`: Delete a recipe by ID

### Categories

- `GET /categories`: Get all categories
- `GET /categories/:categoryId`: Get a single category by ID
- `POST /categories`: Create a new category
- `PUT /categories/:categoryId`: Update a category by ID
- `DELETE /categories/:categoryId`: Delete a category by ID

## File Structure

The project structure is as follows:

- `index.js`: Main entry point of the application
- `controllers/`: Contains controller functions for handling business logic
- `middleware/`: Contains custom middleware functions
- `models/`: Contains data models for MongoDB
- `routes/`: Contains route definitions
- `views/`: Contains HTML templates
- `public/`: Contains static assets (CSS, JavaScript)

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

This project is licensed under the MIT License.
