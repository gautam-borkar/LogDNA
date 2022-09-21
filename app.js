'use strict';

const express = require("express");
const logger = require('./middleware/logger');


const app = express();

// Routes setup ...
app.listen(8080, () => logger.log({level: 'info', message: 'App listening on port 8080!'}));
