var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/Project.js');

/* GET /projects listing. */
router.get('/', function(req, res, next) {
    Project.find(function (err, projects) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(projects);
    });
});

router.get('/:name', function(req, res, next) {
    Project.findOne({name: req.params['name']}, function (err, projects) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(projects);
    });
});
//
// router.get('/test', function (req, res, next) {
//   Project.findByProjectId();
// });

/* POST /projects */
router.post('/', function(req, res, next) {
    Project.create(req.body, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
    Project.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
    Project.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
    Project.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

module.exports = router;