// routes/recipeRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Recipe routes are working!');
});

module.exports = router;
