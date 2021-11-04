const httpStatus = require("http-status");
const { _getAll } = require("../services/files");

const index = (req, res) => {
    _getAll().then((resp) => {
        res.status(httpStatus.OK).send({
            data: resp,
            status_code: res.statusCode
        });
    }).catch((err) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            error: {
                message: err
            },
            status_code: res.statusCode
        });
    })
}

const upload = (req, res) => {
    console.log(req.file);
}

module.exports = {
    index,
    upload,
}