var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Prototype = require('../models/Prototype.js');

/* GET /prototypes listing. */
router.get('/', function(req, res, next) {
    Prototype.find(function (err, prototypes) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(prototypes);
    });
});

router.get('/:id_project', function(req, res, next) {
    Prototype.find({id_project: req.params['id_project']}, function (err, prototypes) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(prototypes);
    });
});

/* POST /prototypes */
router.post('/', function(req, res, next) {
    console.log(req + "gbfdfrerg");
    Prototype.create(req.body, function (err, post) {
        res.header("Access-Control-Allow-Methods", '*');
        res.header("Access-Control-Allow-Headers", '*');
        res.header('Access-Control-Allow-Origin', '*');
        console.log(post);
        console.log(err);
        if (err) return next(err);

        res.json(post);
    });
});


/* GET /todos/id */
router.get('/:id', function(req, res, next) {
    Prototype.findById(req.params.id, function (err, post) {
        if (err) return next(err);

        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
    Prototype.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
    Prototype.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

module.exports = router;