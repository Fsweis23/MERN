const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present."],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    image: {
        type: String,
        required: [true, "{PATH} must be present."],
    },
    treasures: {
        type: Number,
        required: [true, "{PATH} must be present."],
    },
    phrase: {
        type: String,
        required: [true, "{PATH} must be present."],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    position: {
        type: String,
        required: [true, "{PATH} must be present."],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    isPegLeg: {
        type: Boolean,
        default: false
    },
    isEyePatch: {
        type: Boolean,
        default: false
    },
    isHookHand: {
        type: Boolean,
        default: false
    }
}, { timestamp: true });

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;