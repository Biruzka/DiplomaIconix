var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    id_prototype: {
        type: String,
        required: true
    },
    id_user: {
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
    date: {
        type: Date,
        required: true
    },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);