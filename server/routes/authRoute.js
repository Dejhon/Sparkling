const express = require('express');
const router = express.Router();
const loginController = require('./../controllers/login');
const { getUsers,
        addUser,
      } = require('./../controllers/login');


router
    .route('/')
    .post(addUser)
    .get(getUsers);

router
    .route('/:id')
    .get(loginController.getUserById)
    .put(loginController.updateUser)
    .delete(loginController.deleteUser);

module.exports = router;