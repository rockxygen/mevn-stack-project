const Mongoose = require('mongoose');
const logger = require('../scripts/logger/files');

const FileSchema = new Mongoose.Schema(
    {
        fileName: {
            type: String,
            required: true,
            max: 50,
            lowercase: true
        },
        fileUrl: {
            type: String,
            required: true,
            max: 255,
            lowercase: true
        },
        fileType: {
            type: String,
            required: true,
            max: 15,
            lowercase: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

FileSchema.post('save', (doc) => {
    logger.log({
        level: 'info',
        message: doc 
    });
});

module.exports = Mongoose.model('file', FileSchema);