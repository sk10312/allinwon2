
const express = require('express');
const router = express.Router();

// Sample route for fetching training content
router.get('/', (req, res) => {
  res.json({ message: 'Training center API active' });
});

module.exports = router;
