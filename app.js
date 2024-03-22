const express = require('express');
const router = require('./router');
const CONSTANTS = require('./constants');

const app = express();

app.use(express.json());
app.use(express.static(CONSTANTS.FILE_PATH));
app.use(router);

module.exports = app;