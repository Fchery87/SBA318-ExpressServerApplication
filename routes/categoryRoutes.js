// routes/categoryRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Category routes are working!');
});

module.exports = router;
