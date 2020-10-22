const routes = require('express').Router();

const showsRouter = require('./shows.routes');

routes.get('/', (req, res) => {
  res.send('Welcome to my resolution of the coding challenge. To access the api endpoint for shows, please add "/api/shows" to the end of the url.')
});

routes.use('/api/shows', showsRouter);

module.exports = routes;