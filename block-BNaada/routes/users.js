var express = require('express');
const User = require('../models/user');
var router = express.Router();

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    console.log(err, users);
    if (err) return next(err);
    res.render('users', { users: users });
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;

  User.findById(id, (err, user) => {
    console.log(user);
    if (err) return next(err);
    res.render('singleUser', { user: user });
  });
});

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res, next) => {
  User.create(req.body, (err, createdUser) => {
    if (err) return res.redirect('/users/new');
    res.redirect('/');
  });
});

module.exports = router;
