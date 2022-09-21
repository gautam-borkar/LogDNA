"use strict";
const os = require("os");
const logdnaWinston = require('logdna-winston');
const winston = require('winston');

const logger = winston.createLogger({});

const options = {
    key: process.env.LOGDNA_INGEST_KEY,
    hostname: os.hostname(),
    ip: os.networkInterfaces().lo0[0].address,
    mac: os.networkInterfaces().lo0[0].mac,
    app: 'ibm-cloud-logger',
    url: 'https://logs.us-south.logging.cloud.ibm.com/logs/ingest',
    level: 'info', // Default to debug, maximum level of log, doc: https://github.com/winstonjs/winston#logging-levels
    indexMeta: true, // Defaults to false, when true ensures meta object will be searchable
    handleExceptions: true // Only add this line in order to track exceptions
}

logger.add(new logdnaWinston(options));

module.exports = logger;
