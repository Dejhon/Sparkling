const express = require('express');
const Service = require('./../models/serviceModel');


exports.getServices =  async  (req, res) =>{
  try{
    const services = await Service.find();
    res.status(200).json(services)
  }catch(err){
    res.status(404).json({
      status:"Fail",
      message: err
  });
  }
}

exports.addService = async(req, res) =>{
  try{
    const newService = await Service.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        service: newService
      }
    });
  }catch(err){
       res.status(404).json({
        status:"Fail",
        message: err
    });
  }
}

// exports.getStudentByIdEx2 = async (req, res) =>{
//   try{
//   const student = await Student.find({_id: req.params.id})
//     res.status(200).json(student);
//   }catch(err){
//     res.status(404).json({
//       status:"Fail",
//       message: err
//   });
//   }    
// }

// exports.updateStudent = async (req, res) =>{
//   try{
//       const update = await Student.findByIdAndUpdate(req.params.id,
//       {
//         name: req.body.name,
//         email: req.body.email,
//         cohort: req.body.cohort,
//         grade: req.body.grade,
//         phoneNumber: req.body.phoneNumber,
//         registrationFee: req.body.registrationFee,
//        },
//        {new: true}
//        )

//       res.status(200).json({
//       status: 'success',
//       data:{
//         student: update
//       }
//     });
//   }catch{
//     res.status(404).json({
//       status:"Fail",
//       message: err
//    });
//   }  
// }

// exports.updateStudent2 = async (req, res) =>{
//   try{
//     const update = await Student.findByIdAndUpdate(req.params.id,
//       {
//         email: req.body.email,
//         grade: req.body.grade,
//         phoneNumber: req.body.phoneNumber
//       },
//       {new: true}
//       )

//     res.status(200).json({
//     status: 'success',
//     data:{
//       student: update
//     }
//   });
// }catch{
//   res.status(404).json({
//     status:"Fail",
//     message: err
//  });
// }  
// }

// exports.deleteStudent = async (req, res) =>{
//   try{
//     if(req.params.id * 1 > Student.length){
//       return res.status(404).json({
//         status: 'fail',
//         message: 'Invalid ID'
//       });
//     }else{
//       const deleted = await Student.findByIdAndDelete({_id: req.params.id})
//     // Can also be 204 if you are not returning anything in the response
//       res.status(200).json({
//         status: 'success',
//         data:{
//           student: deleted
//         }
//       });
//     }    
//     }catch(err){
//     res.status(404).json({
//       status:"Fail",
//       message: err
//    });
//   } 
// }