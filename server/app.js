const express = require('express');
const morgan = require('morgan');
const serviceRouter = require('./routes/serviceRoute');
const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const bookingRouter = require('./routes/bookingRoute');
const assessRouter = require('./routes/assesmentRoute');
const messageRouter = require('./routes/messageRoute');
const app = express();
const cors = require('cors');

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

app.use(cors())

app.use((req, res, next) =>{
  console.log('[ANGULAR-APP3.1] - User Created Middleware!!');
  next();
})

// app.use((req, res, next) =>{
//   switch (req.method){
//     case 'DELETE':
//         console.log(`\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[31m${req.method}\x1b[0m - ${req.path}`);
//       break;
//     case 'PUT':
//         console.log(`\x1b[44m\x1b[4m[ANGULAR-APP3.1]\x1b[0m - \x1b[32m${req.method}\x1b[0m - ${req.path}`);
//       break;
//     case 'PATCH':
//       console.log(`\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[34m${req.method}\x1b[0m - ${req.path}`);
//       break;
//     case 'POST':
//       console.log(`\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[33m${req.method}\x1b[0m - ${req.path}`);
//       break;
//     case 'GET':
//       console.log(`\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[35m${req.method}\x1b[0m - ${req.path}`);
//       break;
//     default:
//       console.log(`\x1b[43m\x1b[1m[ANGULAR-APP3.1]\x1b[0m - \x1b[35m${req.method}\x1b[0m - ${req.path}`);
//   }
//   next();
// })


// 2) ROUTES
app.use('/sparkling/authentication',authRouter);
app.use('/sparkling/assessment',assessRouter);
app.use('/sparkling/bookings',bookingRouter);
app.use('/sparkling/services',serviceRouter);
app.use('/sparkling/users',userRouter); 
app.use('/sparkling/messages', messageRouter);

module.exports = app;