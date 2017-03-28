var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);

