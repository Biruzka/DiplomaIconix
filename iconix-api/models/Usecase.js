var mongoose = require('mongoose');

var UsecaseSchema = new mongoose.Schema({
    id_project: String,
    code:String,
    name: String,
    actor: String,
    precondition: String,
    scenario: String,
    result: String,
    status: String,
    testing: String,
    importance: String,
    deadline_data: Date,
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Usecase', UsecaseSchema);