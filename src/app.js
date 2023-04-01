const express = require('express');
const { loginRouter, userRouter } = require('./router');
const errorHandler = require('./middleware/errors/error.middleware');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/users', userRouter);

app.use(errorHandler);
module.exports = app;