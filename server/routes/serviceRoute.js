const express = require('express');
const router = express.Router();
const serviceController = require('./../controllers/service');
const { getServices,
        addService,
      } = require('./../controllers/service');


      var whitelist = ['http://localhost:4200','http://localhost:3000/sparkling/services']
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
    .post(cors(corsOptions), addService)
    .get(cors(corsOptions), getServices);

// router
//     .route('/:id')
//     .get(studentController.getStudentByIdEx2)
//     .patch(studentController.updateStudent2)
//     .put(studentController.updateStudent)
//     .delete(studentController.deleteStudent);

module.exports = router;