/**
 * PACKAGES IMPORTS
 */
require('dotenv').config();
const helmet = require('helmet');
const logger = require('morgan');
const indexRouter = require('../routes');

module.exports = (app) => {

    // Request Header Security
    app.use(helmet());

    // Load a request and request logger
    if (process.env.ENVIRONMENT === 'DEVELOPMENT') {
        app.use(logger('dev'));
    }

    // Register Routes
    app.use('/', indexRouter);

}