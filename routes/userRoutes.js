// routes/userRoutes.js

const express = require('express');
const router = express.Router();

// Define your user routes here
router.get('/', (req, res) => {
  res.send('User routes are working!');
});

module.exports = router;