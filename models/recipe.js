const mongoose = require('mongoose');

// Define the schema for the Recipe model
const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;