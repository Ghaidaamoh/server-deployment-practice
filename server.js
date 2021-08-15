const express =require('express');
const app =express();
require('dotenv').config();
const notFoundHnalder = require('./handlers/404.js');
const errorHandler = require('./handlers/500');
let port= process.env.PORT

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/data', (req, res) => {
    let output = {
        10: 'even',
        5: 'odd',
        time: new Date().toString()
    }
    res.status(200).json(output);
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
