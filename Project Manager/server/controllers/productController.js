const Product = require('../models/productModel');

module.exports = {
    findAll: (req, res) => {
        Product.find()
            .then(allProducts => {
                res.json(allProducts)
            })
            .catch(err => res.json(err))
    },

    create: (req, res) => {
        Product.create(req.body)
            .then(newProduct => {
                console.log("SERVER SUCCESS")
                res.json(newProduct);
            })
            .catch(err => {
                console.log("SERVER ERROR")
                res.json(err)
            })
    },

    findOne: (req, res) => {
        Product.findById(req.params.id)
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
    },

    update: (req, res) => {
        console.log("UPDATE ID:", req.params.id)
        console.log("req.body:", req.body)
        Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json(err))
    },

    delete: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    },
}