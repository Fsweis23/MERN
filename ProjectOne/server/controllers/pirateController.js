const Pirate = require('../models/pirateModel');

module.exports = {
    findAll: (req, res) => {
        Pirate.find()
            .then(allPirates => {
                res.json(allPirates)
            })
            .catch(err => res.status(400).json(err))
    },

    create: (req, res) => {
        Pirate.create(req.body)
            .then(newPirate => {
                console.log("SERVER SUCCESS")
                res.json(newPirate);
            })
            .catch(err => {
                console.log("SERVER ERROR")
                res.status(400).json(err)
            })
    },

    findOne: (req, res) => {
        Pirate.findById(req.params.id)
        .then(onePirate => res.json(onePirate))
        .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        console.log("UPDATE ID:", req.params.id)
        console.log("req.body:", req.body)
        Pirate.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedPirate => res.json(updatedPirate))
            .catch(err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Pirate.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err))
    },
}