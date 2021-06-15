const express = require('express');
const morgan = require('morgan');
const globalErrorHandler = require('./src/controllers/errorController');

const userRouter = require('./src/routers/user');
const authRouter = require('./src/routers/auth');
const announcementRouter = require('./src/routers/announcement');
const app = express();

app.use(morgan('dev'));
app.use(express.json({ limit: '10kb' }));
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/announcement', announcementRouter);

app.use(globalErrorHandler);

module.exports = app;
