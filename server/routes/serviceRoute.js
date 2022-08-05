const express = require('express');
const router = express.Router();
const serviceController = require('./../controllers/service');
const { getServices,
        addService,
      } = require('./../controllers/service');


router
    .route('/')
    .post(addService)
    .get(getServices);

// router
//     .route('/:id')
//     .get(studentController.getStudentByIdEx2)
//     .patch(studentController.updateStudent2)
//     .put(studentController.updateStudent)
//     .delete(studentController.deleteStudent);

module.exports = router;