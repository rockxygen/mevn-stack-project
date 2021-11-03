const httpStatus = require("http-status");

const index = (req, res) => {
    res.status(httpStatus.OK).send({
        data: 'file list',
        status_code: res.statusCode
    });
}

module.exports = {
    index,
}