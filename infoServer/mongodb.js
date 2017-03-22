// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://localhost/iconixAppTest');
// Create a schema
var UsecaseSchema = new mongoose.Schema({
    id_project: String,
    code:String,
    name: String,
    actor: String,
    precondition: String,
    scenario: String,
    result: String,
    status: String,
    testing: String,
    importance: String,
    deadline_data: Date,
    updated_at: { type: Date, default: Date.now },
});
// Create a model based on the schema
var Usecase = mongoose.model('Usecase', UsecaseSchema);


// Create a todo in memory
var usecase = new Usecase({code: '001', name: 'Сделать заказ', actor: 'Покупатель'});
// Save it to database
usecase.save(function(err){
    if(err)
        console.log(err);
    else
        console.log(usecase);
});


// You can also build the object and save it in one step using create:
Usecase.create({code: '002', name: 'Оставить коммент', actor: 'Пользователь'}, function(err, todo){
    if(err) console.log(err);
    else console.log(todo);
});


// ---------
// Mongoose Read and Query


///////work with data
//
// Model.find(conditions, [fields], [options], [callback])
// Model.findById(id, [fields], [options], [callback])
// Model.findOne(conditions, [fields], [options], [callback])


// Find all data in the Todo collection
Usecase.find(function (err, usecases) {
    if (err) return console.error(err);
    console.log(usecases)
});



// You can also add queries
// callback function to avoid duplicating it all over
var callback = function (err, data) {
    if (err) { return console.error(err); }
    else { console.log(data); }
};
// Get ONLY completed tasks
Usecase.find({code: '001' }, callback);
// Get all tasks ending with `JS`
Usecase.find({name: /JS$/ }, callback);


// You can chain multiple queries
var oneYearAgo = new Date();
oneYearAgo.setYear(oneYearAgo.getFullYear() - 1);
// Get all tasks staring with `Master`, completed
Todo.find({name: /^Master/, completed: true }, callback);
// Get all tasks staring with `Master`, not completed and created from year ago to now...
Todo.find({name: /^Master/, completed: false }).where('updated_at').gt(oneYearAgo).exec(callback);


// Mongoose Read and Query
// ------------


// ------------
// Mongoose Update

// Model.update(conditions, update, [options], [callback])
// Model.findByIdAndUpdate(id, [update], [options], [callback])
// Model.findOneAndUpdate([conditions], [update], [options], [callback])


// Todo.update and Todo.findOneAndUpdate
// Model.update(conditions, update, [options], [callback])
// update `multi`ple tasks from complete false to true
// Usecase.update({ name: /master/i }, { completed: true }, { multi: true }, callback);
Usecase.update({ code: '001' }, { actor: 'клиент'}, callback);
//Model.findOneAndUpdate([conditions], [update], [options], [callback])
Usecase.findOneAndUpdate({name: /JS$/ }, {completed: false}, callback);

// Mongoose Update
// ------------

// ------------
// Mongoose Delete


// Model.remove(conditions, [callback])
// Model.findByIdAndRemove(id, [options], [callback])
// Model.findOneAndRemove(conditions, [options], [callback])

// Mongoose Delete
// ------------