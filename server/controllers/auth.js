const express = require('express');
const User = require('../models/loginModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const expressJWT = require('express-jwt')

// exports.isLoggedIn = expressJWT({
//   sercret: JWT_SECRET,
//   userProperty:"auth",
//   algorithms:['HS256'],
// })

exports.login = async (req, res) => {
  try{
    const { userName, password} = req.body;
    const user = await User.findOne({userName});
    if(!user){
      return res.status(404).json({status:"Error", message:"User not found"})
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if(comparePassword){
      const token = jwt.sign({
        _id: user._id,
        userName: user.userName,
      },
       JWT_SECRET = "doctorBird",{
        expiresIn:86400 //will expire in the next 24 hours
      })
      return res.status(200).json({user, token: token})
    }else{
      return res.status(400).json({status:"error", message:"Invalid Credentials"})
    }
  }catch(err){
   console.log(err);
  }
}
