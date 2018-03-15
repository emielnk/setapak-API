var config = require('../config')
var router = require('express').Router()
// var expres = require('express')

var userControllers = require('../controllers/userControllers')

var APIRoutes = function () {
    router.get('/users', userControllers.getUser);
    router.get('/users/:id', userControllers.getUserById)
    return router;
};

module.exports = APIRoutes;