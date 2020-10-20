const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/admin/admin_controller')
router.post('/sign-up', adminController.sing_up);
router.post('/sign-in', adminController.sign_in);
router.get('/profile', adminController.checkAuth, (req,res)=>{
    return res.status(200).json({
        message: 'admin rofile'
    })
})


module.exports = router;