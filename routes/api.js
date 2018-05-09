var config = require('../config')
var router = require('express').Router()
// var expres = require('express')

var wisatawanControllers = require('../controllers/wisatawanControllers')

var APIRoutes = function () {
    router.get('/users', wisatawanControllers.getUser);
    router.get('/users/:id', wisatawanControllers.getUserById)
    return router;
};

module.exports = APIRoutes;