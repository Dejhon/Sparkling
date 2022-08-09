const express = require('express');
const router = express.Router();
const cors = require('cors')
// const userController = require('../controllers/auth');
const { login,
       
      } = require('../controllers/auth');
  
var whitelist = ['http://localhost:4200','http://localhost:3000/sparkling/authentication',]
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
    .post(cors(corsOptions), login);


module.exports = router;