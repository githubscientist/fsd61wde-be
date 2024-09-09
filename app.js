const express = require('express');

const app = express();

// setup the routes
app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

// export the app
module.exports = app;