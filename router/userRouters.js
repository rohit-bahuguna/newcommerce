const express = require('express');
const { singUp, singIn } = require('../controllers/userController');
const userRouter = express.Router();


userRouter.post('/signup' , singUp);
userRouter.post('/signin' , singIn);

module.exports = userRouter;
