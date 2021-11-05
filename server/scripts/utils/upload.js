const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/files');
    },
    filename: (req, file, cb) => {
        // const fileName = file.originalname.split('')[0];
        const fileName = Math.floor(Math.random() * 1000000000);
        cb(null, fileName + '_' + Date.now().toString() + '_' + Date.now().toString() + path.extname(file.originalname));
    }
});

const uploadFile = multer({storage});

module.exports = {
    uploadFile
};