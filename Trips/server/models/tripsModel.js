const mongoose = require('mongoose');

const TripsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present."],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
}, { timestamp: true });

const Trips = mongoose.model("Trips", TripsSchema);

module.exports = Trips;