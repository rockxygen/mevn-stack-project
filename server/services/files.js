const File = require('../models/files');
const upload = require('../scripts/utils/upload');

const _getAll = () => {
    return File.find({});
}

const _upload = () => {
    // return upload.single('file');
}

module.exports = {
    _getAll,
    _upload,
}