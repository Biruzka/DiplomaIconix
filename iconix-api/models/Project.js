var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);

