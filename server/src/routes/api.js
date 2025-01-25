const express = require('express');

const plantesRouter = require('./planets/planets.router');
const launchesRouter = require('./launches/launches.router');

const api = express.Router();

api.use('/planets', plantesRouter);
api.use('/launches', launchesRouter);

module.exports = api;