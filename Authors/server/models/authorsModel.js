const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present."],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
}, { timestamp: true });

const Authors = mongoose.model("Authors", AuthorsSchema);

module.exports = Authors;