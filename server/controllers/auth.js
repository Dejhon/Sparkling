const express = require('express');
const Login = require('../models/loginModel');
const bycrpt = require('bcrypt');


exports.login =  async (req, res) =>{
  try{
  const user = Login.find({userName: req.body.userName, password:req.body.password})
  res.status(201).json({
    message:"Logged In Successfully"
  })
  }catch(err){
    res.status(400).json({
      message:"User not found"
    })
  }
}
