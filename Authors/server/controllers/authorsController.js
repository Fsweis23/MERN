const Authors = require('../models/authorsModel');

module.exports = {
    findAll: (req, res) => {
        Authors.find()
            .then(allAuthors => {
                res.json(allAuthors)
            })
            .catch(err => res.status(400).json(err))
    },

    create: (req, res) => {
        Authors.create(req.body)
            .then(newAuthors => {
                console.log("SERVER SUCCESS")
                res.json(newAuthors);
            })
            .catch(err => {
                console.log("SERVER ERROR")
                res.status(400).json(err)
            })
    },

    findOne: (req, res) => {
        Authors.findById(req.params.id)
        .then(oneAuthors => res.json(oneAuthors))
        .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        console.log("UPDATE ID:", req.params.id)
        console.log("req.body:", req.body)
        Authors.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedAuthors => res.json(updatedAuthors))
            .catch(err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Authors.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err))
    },
}