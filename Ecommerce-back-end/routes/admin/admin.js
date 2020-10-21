const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/admin/admin_controller');
const { validateSignUpRequest, isRequestValidated, validateSignInRequest } = require('../../controllers/validators/validater');
router.post('/sign-up', validateSignUpRequest,isRequestValidated ,adminController.sing_up);
router.post('/sign-in', validateSignInRequest, isRequestValidated,adminController.sign_in);
router.get('/profile', adminController.checkAuth, (req,res)=>{
    return res.status(200).json({
        message: 'admin rofile'
    })
})


module.exports = router;