const File = require('../models/files');
const upload = require('../scripts/utils/upload');

const _getAll = () => {
    return File.find({});
}

const _upload = (data) => {
    const reqData = {
        fileName: '...',
        fileUrl: data.path,
        fileType: data.mimetype
    }
    const file = new File(reqData);
    return file.save();
}

module.exports = {
    _getAll,
    _upload,
}