require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tambahRouter = require('./routes/tambah')
var listRouter = require('./routes/list')
var editRouter = require('./routes/edit')
var authRouter = require('./routes/auth')
var hapusRouter = require('./routes/hapus')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors({ credentials: true, origin:'*'}))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tambah', tambahRouter)
app.use('/list', listRouter)
app.use('/edit', editRouter)
app.use('/auth', authRouter)
app.use('/hapus', hapusRouter)

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;