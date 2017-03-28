var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    login: String,
    password: String,
    email: String,
    projects: Array,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);

