var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    id_prototype: String,
    title:String,
    text: String,
    x: Number,
    y: Number,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', NoteSchema);