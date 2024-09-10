const express = require('express');
const authRouter = require('./routes/authRoutes');

const app = express();

// middlewares
// parse the incoming request with JSON payload
app.use(express.json());

// setup the routes
app.use('/auth', authRouter);

// export the app
module.exports = app;