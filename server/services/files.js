const File = require('../models/files');

const _getAll = () => {
    return File.find({});
}

module.exports = {
    _getAll,
}