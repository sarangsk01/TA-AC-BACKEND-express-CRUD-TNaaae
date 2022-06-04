var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

mongoose.connect(
  'mongodb://127.0.0.1:27017/user-resource',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  }
);

var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routing middleware
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
  res.send('Page Not Found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('server is listening on port 3k');
});
