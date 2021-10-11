'use strict'

const express = require('express');
//const router = require('./routes/app');
const app = express();
const port = 8080;

const appRouter = require('./routes/app');

app.use(express.urlencoded());

app.use(express.static('public'));

app.use('/', appRouter);

app.listen(port);
console.log('server is alive on port: ' + port);