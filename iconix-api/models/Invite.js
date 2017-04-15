var mongoose = require('mongoose');

var InviteSchema = new mongoose.Schema({
    name_project: {
        type: String,
        required: true
    },
    email_user: {
        type: String,
        required: true
    },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invite', InviteSchema);

