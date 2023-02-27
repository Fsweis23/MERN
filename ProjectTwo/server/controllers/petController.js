const Pet = require('../models/petModel');

module.exports = {
    findAll: (req, res) => {
        Pet.find()
            .then(allPet => {
                res.json(allPet)
            })
            .catch(err => res.status(400).json(err))
    },

    create: (req, res) => {
        Pet.create(req.body)
            .then(newPet => {
                console.log("SERVER SUCCESS")
                res.json(newPet);
            })
            .catch(err => {
                console.log("SERVER ERROR")
                res.status(400).json(err)
            })
    },

    findOne: (req, res) => {
        Pet.findById(req.params.id)
        .then(onePet => res.json(onePet))
        .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        console.log("UPDATE ID:", req.params.id)
        console.log("req.body:", req.body)
        Pet.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedPet => res.json(updatedPet))
            .catch(err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Pet.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err))
    },
}