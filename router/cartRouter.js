
const express = require('express');
const {deleteFromCart , getOneCart , getAllCart , addToCart , UpdateCart} = require('../controllers/cartControllers')
const cartRouter = express.Router();
const auth = require('../middleware/auth')

cartRouter.post('/addtocart' , auth , addToCart ) //Create --> POST
cartRouter.get('/getallcart' , auth , getAllCart) // Read all --> GET
cartRouter.get('/getonecart' , auth , getOneCart) // Read one --> GET
cartRouter.delete('/deletefromcart/:id' , auth ,  deleteFromCart)  // Delete ---> POST
cartRouter.put('/updatecart/:id' , auth , UpdateCart)  // Delete ---> POST

module.exports = cartRouter;