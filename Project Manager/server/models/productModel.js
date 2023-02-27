const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} must be present."],
        minlength: [3, "{PATH} must be 3"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} must be present."],
    },
    description: {
        type: String,
        required: [true, "{PATH} must be present."],
    }
}, { timestamp: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;