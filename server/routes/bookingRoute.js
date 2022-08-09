const express = require('express');
const router = express.Router();
const serviceController = require('./../controllers/bookings');
const cors = require('cors')
const { getBookings, addReservation } = require('../controllers/bookings');


      var whitelist = ['http://localhost:4200','http://localhost:3000/sparkling/bookings']
      var corsOptions = {
        origin: function (origin, callback) {
          if (whitelist.includes(origin) !== -1) {
            callback(null, true)
          } else {
            callback(new Error('Not allowed by CORS'))
          }
        }
      }
      
router
    .route('/')
    .get(getBookings)
    .post(addReservation)

// router
//     .route('/:id')
//     .get(studentController.getStudentByIdEx2)
//     .patch(studentController.updateStudent2)
//     .put(studentController.updateStudent)
//     .delete(studentController.deleteStudent);

module.exports = router;