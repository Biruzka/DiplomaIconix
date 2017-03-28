var mongoose = require('mongoose');

var PrototypeSchema = new mongoose.Schema({
    id_project: String,
    code:String,
    name: String,
    img: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prototype', PrototypeSchema);