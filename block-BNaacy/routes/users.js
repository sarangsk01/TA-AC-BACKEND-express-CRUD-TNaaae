var express = require('express');
const User = require('../models/User');
var router = express.Router();

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    console.log(err, users);
    if (err) return next(err);
    res.render('users.ejs', { users: users });
  });
});

router.get('/new', (req, res) => {
  res.render('userForm.ejs');
  console.log(req.body);
  res.send(req.body);
});

router.post('/', (req, res, next) => {
  User.create(req.body, (err, createdUser) => {
    if (err) return res.redirect('/users/new');
    res.redirect('/');
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

module.exports = router;
