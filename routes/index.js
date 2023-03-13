const router = require('express').Router();

// @desc    
// @route   GET /
// @access  Public
router.get('/', (req, res, next) => {
  res.json({ message: 'Connected' });
});

module.exports = router;
