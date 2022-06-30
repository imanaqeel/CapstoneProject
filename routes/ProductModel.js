const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        productId: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        dateCreated: {
            type: Date,
            required: true,
            default: Date.now
        },
        quantity: {
            type: Number,
            required: true
        }
    }
);


const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;