const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('Product', ProductSchema);