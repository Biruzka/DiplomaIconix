var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Usecase = require('../models/Usecase.js');

/* GET /usecases listing. */
router.get('/', function(req, res, next) {
  Usecase.find(function (err, usecases) {
    if (err) return next(err);
    res.header('Access-Control-Allow-Origin', '*');
    res.json(usecases);
  });
});

/* POST /usecases */
router.post('/', function(req, res, next) {
  Usecase.create(req.body, function (err, post) {
    if (err) return next(err);
    res.header('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Usecase.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.header('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Usecase.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.header('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Usecase.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.header('Access-Control-Allow-Origin', '*');
    res.json(post);
  });
});

module.exports = router;