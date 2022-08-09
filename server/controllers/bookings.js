const express = require('express');
const Booking = require('./../models/bookingModel');
const multer = require('multer')


exports.getBookings =  async  (req, res) =>{
  try{
    const allbookings = await Booking.find();
    res.status(200).json(allbookings)
  }catch(err){
    res.status(404).json({
      status:"Fail",
      message: err
  });
  }
}

exports.addReservation = async(req, res) =>{
  try{
    const newReservation = await Booking.create({
      name:req.body.name,
      email:req.body.email,
      address: req.body.address,
      serviceBooked: req.body.serviceBooked
    })
    res.status(201).json({
      status: 'success',
      data: {
        reservation: newReservation
      }
    });
  }catch(err){
       res.status(404).json({
        status:"Fail",
        message: err
    });
  }
}

// exports.getBookingsById = async (req, res) =>{
//   try{
//   const bookings = await Booking.find({_id: req.params.id})
//     res.status(200).json(bookings);
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