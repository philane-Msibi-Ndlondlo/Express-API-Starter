/**
 * PACKAGES IMPORTS
 */
const express = require('express');
const app = express();

const applyMiddleWare = require('./middleware/core');
const startServer = require('./core');

/**
 * Load all API middleware
 */
applyMiddleWare(app);

/**
 * START EXPRESS API SERVER
 */
startServer(app);


