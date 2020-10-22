const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/admin', require('./admin/admin'));
router.use('/category', require('./category'));


module.exports = router;