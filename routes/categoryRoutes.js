// routes/categoryRoutes.js

const express = require('express');
const router = express.Router();

// Define your category routes here
router.get('/', (req, res) => {
  res.send('Category routes are working!');
});

module.exports = router;
