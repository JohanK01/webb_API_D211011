'use strict'

const express = require('express');
const app = express();
const port = 8042;

const appRouter = require('./routes/app');

app.use(express.urlencoded());

app.use(express.static('public'));

app.use('/', appRouter);

app.listen(port);
console.log('server is alive on port: ' + port);