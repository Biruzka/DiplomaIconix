var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = require('../models/Note.js');

/* GET /notes listing. */
router.get('/', function(req, res, next) {
    Note.find(function (err, notes) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(notes);
    });
});

router.get('/:id_prototype', function(req, res, next) {
    Note.find({id_prototype: req.params['id_prototype']}, function (err, notes) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(notes);
    });
});

/* POST /notes */
router.post('/', function(req, res, next) {
    Note.create(req.body, function (err, post) {
        res.header("Access-Control-Allow-Methods", '*');
        res.header("Access-Control-Allow-Headers", '*');
        res.header('Access-Control-Allow-Origin', '*');
        console.log(post);
        console.log(err);
        if (err) return next(err);

        res.json(post);
    });
});

// router.post('/', function (req, res, next) {
//   console.log(req);
// });

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
    Note.findById(req.params.id, function (err, post) {
        if (err) return next(err);

        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
    Note.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
    Note.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

module.exports = router;