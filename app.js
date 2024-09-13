const express = require('express');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const commentRouter = require('./routes/commentRoutes');
const cors = require('cors');

const app = express();

// enable cors
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// middlewares
// parse the cookies
app.use(cookieParser());

app.use('/uploads', express.static('uploads'));

// parse the incoming request with JSON payload
app.use(express.json());

// setup the routes
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/posts', commentRouter);

// export the app
module.exports = app;