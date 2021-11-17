const httpStatus = require("http-status");
const { _getAll, _upload } = require("../services/files");

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
    _upload(req.file).then((resp) => {
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

module.exports = {
    index,
    upload,
}