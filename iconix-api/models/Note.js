var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    id_prototype: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', NoteSchema);