var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    id_prototype: String,
    id_user: String,
    title:String,
    text: String,
    date: Date,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);