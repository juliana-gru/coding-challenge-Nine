const routes = require('express').Router();

const showsRouter = require('./shows.routes');

routes.use('/api/shows', showsRouter);

module.exports = routes;