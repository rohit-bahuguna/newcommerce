
const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({

    userid:{
        type: String,
        required: true,
    },
   product:{
    type: Object,
    required: true,
   },
   
  
} , {timestamp:true});

module.exports = mongoose.model('Cart' , cartSchema);