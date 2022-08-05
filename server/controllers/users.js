const express = require('express');
const Login = require('../models/loginModel');


exports.getUsers =  async  (req, res) =>{
  try{
    const auth = await Login.find();
    res.status(200).json(auth)
  }catch(err){
    res.status(404).json({
      status:"Fail",
      message: err
  });
  }
}

exports.addUser = async(req, res) =>{
  try{
    const newLogin = await Login.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        service: newLogin
      }
    });
  }catch(err){
       res.status(404).json({
        status:"Fail",
        message: err
    });
  }
}

// exports.login =  async (req, res) =>{
//   try{
//   const user = Login.find({userName: req.body.userName, password:req.body.password})
//   res.status(404).json({
//     message:"User not found"
//   })
//   }catch(err){
//     res.status(201).json({
//       message:"Logged In Successfully"
//     })
//   }
// }

exports.getUserById = async (req, res) =>{
  try{
  const login = await Login.find({_id: req.params.id})
    res.status(200).json(login);
  }catch(err){
    res.status(404).json({
      status:"Fail",
      message: err
  });
  }    
}

exports.updateUser = async (req, res) =>{
  try{
      const update = await Login.findByIdAndUpdate(req.params.id,
      {
        userName: req.body.usernName,
        password: req.body.password,
       },
       {new: true}
       )

      res.status(200).json({
      status: 'success',
      data:{
        login: update
      }
    });
  }catch{
    res.status(404).json({
      status:"Fail",
      message: err
   });
  }  
}

exports.deleteUser = async (req, res) =>{
  try{
    if(req.params.id * 1 > Login.length){
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID'
      });
    }else{
      const deleted = await Login.findByIdAndDelete({_id: req.params.id})
    // Can also be 204 if you are not returning anything in the response
      res.status(200).json({
        status: 'success',
        data:{
          User: deleted
        }
      });
    }    
    }catch(err){
    res.status(404).json({
      status:"Fail",
      message: err
   });
  } 
}