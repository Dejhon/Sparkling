const express = require('express');
const User = require('../models/loginModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) =>{
    const username = req.body?.userName
    const password = req.body?.password
    if(username && password) {
    await User.findOne({userName: username}).then(existUser => {
        if(existUser && existUser._id) {
            bcrypt.compare(password, existUser?.password,function(err, response) {
                if(!err && response) {
                   const auth = jwt.sign(
                       { user_id: existUser._id, username },
                       'secretKey'
                     );
                   res.json({status: 'ok',loginUser : true, data: {existUser , response ,auth}});
                } else {
                   res.json({status: 'warn', loginUser : false, data: 'Please enter valid password'});
                }
            })   
        } else {
            res.json({status: 'warn', loginUser : false, data: 'Please enter valid password'});

        }
        }, (error) => {
            res.json({status: 'error' , data : error})
        })
    }
}

// exports.login = async (req, res) => {
//   try{
//     const { userName, password} = req.body;
//     const user = await User.findOne({userName});
//     if(!user){
//       return res.status(404).json({status:"Error", message:"User not found"})
//     }
//     const comparePassword = await bcrypt.compare(password, user.password);
//     if(comparePassword){
//       const token = jwt.sign({
//         _id: user._id,
//         userName: user.userName,
//       },
//        JWT_SECRET = "doctorBird",{
//         expiresIn:86400 //will expire in the next 24 hours
//       })
//       return res.status(200).json({user, token: token})
//     }else{
//       return res.status(400).json({status:"error", message:"Invalid Credentials"})
//     }
//   }catch(err){
//    console.log(err);
//   }
// }
