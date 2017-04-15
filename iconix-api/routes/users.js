var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET /users listing. */
router.get('/', function(req, res, next) {
    User.find(function (err, users) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(users);
    });
});

/* POST /users */
router.post('/', function(req, res, next) {
    User.create(req.body, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});
// 58e669cbbef1991f84673d20
// projects - {projectName: "Team", access: "admin"}
/* PUT /todos/:id */
router.put('/addProject/:id', function(req, res, next) {
    // var newProjectObject=eval("("+req.body.project+")");

    User.findById(req.params.id, function (err, post) {
        console.log("post");

        var existYet = false;

        post.projects.forEach(function(item, i, arr) {


          if (item.name == req.body.name) {
              console.log("содержит");
              existYet = true;
          }
            else {
              console.log("не содержит");
            }
        });

        if (existYet) res.json(post);

        else {
            User.findByIdAndUpdate(req.params.id, {$push: {projects: req.body}},
                {safe: true, upsert: true, new : true}, function (err, post) {
                    console.log("lобавочка")
                if (err) return next(err);
                res.header('Access-Control-Allow-Origin', '*');
                res.json(post);
            });
        }
    });

    // User.findByIdAndUpdate(req.params.id, {$push: {projects: req.body}},
    //     {safe: true, upsert: true, new : true}, function (err, post) {
    //     if (err) return next(err);
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.json(post);
    // });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

module.exports = router;