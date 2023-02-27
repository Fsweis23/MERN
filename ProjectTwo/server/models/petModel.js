const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present."],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    type: {
        type: String,
        required: [true, "{PATH} must be present."],
    },
    description: {
        type: String,
        required: [true, "{PATH} must be present."],
    },
    skillOne: {
        type: String,
    },
    skillTwo: {
        type: String,
    },
    skillThree: {
        type: String,
    },
    adopted: {
        type: Boolean,
        default: false
    },
}, { timestamp: true });

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;