const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller')
router.post('/sign-up', userController.create);
// router.get("/sign-up",(req,res)=>{
//     return res.status(200).json({
//         message:"this work"
//     })
// })

module.exports = router;