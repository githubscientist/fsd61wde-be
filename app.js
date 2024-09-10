const express = require('express');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');

const app = express();

// middlewares
// parse the cookies
app.use(cookieParser());

// parse the incoming request with JSON payload
app.use(express.json());

// setup the routes
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);

// export the app
module.exports = app;