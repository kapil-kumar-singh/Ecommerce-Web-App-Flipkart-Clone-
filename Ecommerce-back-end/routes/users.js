const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller')
router.post('/sign-up', userController.sing_up);
router.post('/sign-in', userController.sign_in);
router.get('/profile', userController.checkAuth, (req,res)=>{
    return res.status(200).json({
        message: 'user rofile'
    })
})


module.exports = router;