const Trips = require('../models/tripsModel');

module.exports = {
    findAll: (req, res) => {
        Trips.find()
            .then(allTrips => {
                res.json(allTrips)
            })
            .catch(err => res.status(400).json(err))
    },

    create: (req, res) => {
        Trips.create(req.body)
            .then(newTrips => {
                console.log("SERVER SUCCESS")
                res.json(newTrips);
            })
            .catch(err => {
                console.log("SERVER ERROR")
                res.status(400).json(err)
            })
    },

    findOne: (req, res) => {
        Trips.findById(req.params.id)
        .then(oneTrips => res.json(oneTrips))
        .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        console.log("UPDATE ID:", req.params.id)
        console.log("req.body:", req.body)
        Trips.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedTrips => res.json(updatedTrips))
            .catch(err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Trips.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err))
    },
}