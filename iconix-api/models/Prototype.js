var mongoose = require('mongoose');

var PrototypeSchema = new mongoose.Schema({
    id_project: {
        type: String,
        required: true
    },
    code:{
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    img: {
        // data: Buffer, contentType: String
        type: String
    },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prototype', PrototypeSchema);