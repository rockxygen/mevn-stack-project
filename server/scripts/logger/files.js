const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {
        service: 'file-service'
    },
    transports: [
        new winston.transports.File({ filename: 'server/logs/files/error.log', level: 'error', maxsize: 10000 }),
        new winston.transports.File({ filename: 'server/logs/files/info.log', level: 'info', maxsize: 10000 }),
        new winston.transports.File({ filename: 'server/logs/files/combined.log', maxsize: 10000 }),

    ],
});

module.exports = logger;