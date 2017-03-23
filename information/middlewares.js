// Log the client IP on every request
app.use(function (req, res, next) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('Client IP:', ip);
    next();
});

// Middleware mounted on "/todos/:id" and log the request method
app.use('/todos/:id', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});
// Middleware mounted on "/todos/:id" and returns
app.get('/todos/:id', function (req, res, next) {
    Todo.findById(req.params.id, function(err, todo){
        if(err) res.send(err);
        res.json(todo);
    });
});