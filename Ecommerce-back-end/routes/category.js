const express = require('express');
const { createCategory, getCategory } = require('../controllers/categoryController');
const { requireSignIn, isAdmin } = require('../controllers/common_middleware/authenticate');
const router = express.Router();

router.post('/create', requireSignIn, isAdmin, createCategory);
router.get('/getcategory', getCategory);

module.exports = router;