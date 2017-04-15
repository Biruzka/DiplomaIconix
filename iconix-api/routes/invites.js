var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Invite = require('../models/Invite.js');

/* GET /invites listing. */
router.get('/', function(req, res, next) {
    Invite.find(function (err, invites) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(invites);
    });
});

router.get('/:email_user', function(req, res, next) {
    Invite.findOne({name: req.params['email_user']}, function (err, invites) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(invites);
    });
});

/* POST /invites */
router.post('/', function(req, res, next) {
    Invite.create(req.body, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
    Invite.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
    Invite.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(post);
    });
});

module.exports = router;