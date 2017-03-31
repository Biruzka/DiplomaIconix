var mongoose = require('mongoose');

var UsecaseSchema = new mongoose.Schema({
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
    actor: String,
    precondition: String,
    scenario: String,
    result: String,
    status: {
        type: String,
        default: 'waiting',
        // enum: ['approval', 'waiting', 'development', 'release'],
    },
    testing: {
        type: String,
        default: 'nil',
        // enum: ['succcess','failure','nil'],
    },
    importance: {
        type: String,
        default: 'A',
        // enum: ['A','B','C'],
    },
    deadline_data: Date,
    updated_at: { type: Date, default: Date.now },
});

// module.exports = mongoose.model('Usecase', UsecaseSchema);


const Usecase = mongoose.model('Usecase', UsecaseSchema);

// Usecase.findByProjectId = function () {
//     mongoose.connect.find({}).then(function (result) {
//         console.log(result);
//     })
// }

module.exports = Usecase;