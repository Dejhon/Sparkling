const express = require('express');
const User = require('../models/loginModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt')
const { filter } = require('rxjs');

exports.login = async (req, res) => {
  try{
    const { userName, password} = req.body;
    const user = await User.findOne({userName});
    if(!user){
      return res.json({status:"Error", message:"User not found"})
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if(comparePassword){
      res.send({status:"Successful", message:"Logged in successfully"});
      const token = jwt.sign({
        id: user._id,
        userName: user.userName
      },
      JWT_SECRET,{
        expiresIn:86400
      })
      return res.json({user, token: token})
    }else{
      return res.json({status:"error", message:"Invalid Credentials"})
    }
  }catch(err){
    res.status(400).json({
      message:"Error Occured"
    })
  }
}

// exports.login =  async (req, res) =>{
//   try{
//   const user = User.findOne({userName:req.body.userName})
//   if(!user){
//     return res.status(404).json({
//       message: "That user is not registered"
//     })
//   }
//   if(!await bycrpt.compare(req.body.password, user.password)){
//     return res.status(400).json({
//       message: "That password is incorrect"
//     })
//   }

//   res.status(201).json({
//     message:"Logged In Successfully"
//   })
//   }catch(err){
//     res.status(400).json({
//       message:"User not found"
//     })
//   }
// }

// exports.login = async (req, res) => {
//   try{
//     const salt = await bycrpt.genSalt(10);
//     const hashedPassword = await bycrpt.hash(req.body.password, salt)
//     const user = await User.findOne({userName:req.body.userName, password:hashedPassword});
//     if(!user){
//       res.status(404).json({
//         message:"Invalid Credential"
//       })
//     }else{
//       res.status(200).json({
//         message:"Login Successful",
//         user: user
//       })
//     }
//   }catch(err){
//     res.status(404).json({
//       status:"Invalind Credentials",
//       message: err
//    });
//   } 
// }