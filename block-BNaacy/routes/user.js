var express = require('express');
var router = express.Router();
var User = require('../models/books');

router.get('/', (req, res) => {
  res.render('users');
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  if (err) return next(err);
  User.create(req.body, (err, createdUser) => {
    console.log(err, createdUser);
    res.redirect('/users');
  });
});

router.get('/new', (req, res) => {
  res.render('userForm');
});

module.exports = router;
