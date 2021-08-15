'use strict';
const express =require('express');
const app =express();
require('dotenv').config();
const notFoundHnalder = require('./handlers/404.js');
const errorHandler = require('./handlers/500');

app.get('/', (req, res) => {
    res.status(200).send('welcome to my app');
});

app.get('/data', (req, res) => {
    let data = {
        city: 'amman',
        wheather: 'sunny',
        time: new Date().toString()
    }
    res.status(200).json(data);
});

app.get('/bad', (req, res, next) => {
    next('error from bad end point');
});

app.use('*', notFoundHnalder);
app.use(errorHandler);

function start(port) {
app.listen(port, () => console.log(`Server started on port ${port}`));
}



module.exports = {
    start,
    app
}
