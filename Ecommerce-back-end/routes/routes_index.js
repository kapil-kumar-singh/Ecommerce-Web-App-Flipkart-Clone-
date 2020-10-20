const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/admin', require('./admin/admin'))


module.exports = router;