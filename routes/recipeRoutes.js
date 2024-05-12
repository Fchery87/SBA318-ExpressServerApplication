// routes/recipeRoutes.js

const express = require('express');
const router = express.Router();

// Define your recipe routes here
router.get('/', (req, res) => {
  res.send('Recipe routes are working!');
});

module.exports = router;
