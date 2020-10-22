const Router = require('express');

const showController = require('../controllers/ShowController.js')

const showsRouter = Router();

showsRouter.post('/', showController);

module.exports = showsRouter;