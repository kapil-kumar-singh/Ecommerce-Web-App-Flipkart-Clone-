const express = require('express');
const { validationResult } = require('express-validator');
const userController = require('../controllers/user_controller');
const { isRequestValidated, validateSignUpRequest, validateSignInRequest } = require('../controllers/validators/validater');
const router = express.Router();

router.post('/sign-up', validateSignUpRequest, isRequestValidated, userController.sing_up);
router.post('/sign-in', validateSignInRequest, isRequestValidated, userController.sign_in);
router.get('/profile', userController.checkAuth, (req,res)=>{
    return res.status(200).json({
        message: 'user rofile'
    })
})


module.exports = router;