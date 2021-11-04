const express = require('express');
const routes = express.Router();
const { index, upload } = require('../controllers/files');
const { uploadFile } = require('../scripts/utils/upload');

routes.route('/').get(index);
routes.route('/upload').post(uploadFile.single('file'), upload);

module.exports = routes;