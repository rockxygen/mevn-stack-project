const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/files');
    },
    filename: (req, file, cb) => {
        // const fileName = file.originalname.split('')[0];
        const fileName = generateRandom(1000000000);
        cb(null, fileName + '_' + generateRandom(Date.now().toString()) + '_' + generateRandom(Date.now().toString()) + path.extname(file.originalname));
    }
});

const generateRandom = (num) => {
    return Math.floor(Math.random() * num);
}

const uploadFile = multer({storage});

module.exports = {
    uploadFile
};