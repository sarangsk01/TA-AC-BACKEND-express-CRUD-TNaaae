var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost:27017/sample'),
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to database');
  };

var app = express();

app.use(express.json());

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) => {
  res.render('school');
});

app.use((req, res, next) => {
  res.send('Page Not Found');
});

app.listen(3000, () => {
  console.log('server is listening on port 3k');
});
