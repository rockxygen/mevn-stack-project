const express = require('express');
const routes = express.Router();
const { index } = require('../controllers/files');

routes.route('/').get(index);

module.exports = routes;