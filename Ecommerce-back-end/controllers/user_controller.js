const User = require('../models/user');

module.exports.create = function(req, res){
    // console.log('here',req.body);
   User.findOne({email : req.body.email}, function(err, user){
        if(err){console.log('Error in finding user in sign up', err); return;}
       
        if(!user){
            User.create({
                firstName: req.body.firstName,
                lastName :req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                username: Math.random().toString()

            }, function(err, user){
                
                if(err){
                    // console.log(err);
                    return res.status(400).json({
                        message: 'Something went wrong'
                    })
                }

                return res.status(201).json({
                    message: "user created successfully"
                })
            })
        }else{
            return res.status(400).json({
                message: 'User already registered'
            })
        }
   })
}

