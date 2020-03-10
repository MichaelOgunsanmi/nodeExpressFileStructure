const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');


const winstonSetting = (filename) => {
    return {
        filename,
        format: winston.format.combine(
            winston.format.timestamp({
                format:'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.printf(info => {
                return JSON.stringify(info, null,4)
            })
        )
    };
};


const dbConnection = () => {
    const dbLocal = process.env.DB_LOCAL;
    const dbAtlas = proces.env.DB_ONLINE;
    const db = dbLocal || dbAtlas;

    return {
        db,
        name: "logFile"
    }
};


module.exports = function () {

    process.on('unhandledRejections', (ex) => {
        throw(ex)
    });

    winston.add(
        new winston.transports.File({
            ...winstonSetting('./log/uncaughtExceptions.log'),
            handleExceptions: true
        })
    );

    winston.add(
        new winston.transports.File(
            winstonSetting('./log/logfile.log')
        )
    );

    winston.add(
        new winston.transports.MongoDB(
            dbConnection()
        )
    );

    winston.add(
        new winston.transports.Console({
            format: winston.format.simple()
        })
    );

};