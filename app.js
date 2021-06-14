const express = require('express');

const userRouter = require('./src/routers/user');
const app = express();

app.use(express.json({ limit: '10kb' }));
app.use('/api/user', userRouter);

module.exports = app;
