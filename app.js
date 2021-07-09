const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const globalErrorHandler = require('./src/controllers/errorController');

const userRouter = require('./src/routers/user');
const authRouter = require('./src/routers/auth');
const announcementRouter = require('./src/routers/announcement');
const bellRouter = require('./src/routers/bell');
const courseRouter = require('./src/routers/course');
const dayRouter = require('./src/routers/day');
const timeTableRouter = require('./src/routers/timeTable');
const timeTableBellRouter = require('./src/routers/timeTableBell');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/bells', bellRouter);
app.use('/api/announcements', announcementRouter);
app.use('/api/days', dayRouter);
app.use('/api/courses', courseRouter);
app.use('/api/timeTableBells', timeTableBellRouter);
app.use('/api/timeTables', timeTableRouter);

app.use(globalErrorHandler);

module.exports = app;
