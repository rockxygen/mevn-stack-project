const Mongoose = require('mongoose');

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

module.exports = Mongoose.model('file', FileSchema);