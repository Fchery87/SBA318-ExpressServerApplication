const Recipe = require('../models/recipe');

// Controller functions for managing recipes

// Example GET route for fetching all recipes
exports.getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    next(error);
  }
};

// Example POST route for adding a new recipe
exports.addRecipe = async (req, res, next) => {
  try {
    const { title, ingredients, instructions, category } = req.body;
    const recipe = new Recipe({ title, ingredients, instructions, category });
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
};

// More controller functions for updating and deleting recipes...
