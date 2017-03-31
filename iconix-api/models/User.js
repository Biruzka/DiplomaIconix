var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    login: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    projects: Array,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);

