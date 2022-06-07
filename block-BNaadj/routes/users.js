var express = require('express');
const User = require('../models/User');
var router = express.Router();

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    console.log(err, users);
    if (err) return next(err);
    res.render('listUsers.ejs', { users });
  });
});

router.get('/new', (req, res, next) => {
  res.render('userForm.ejs');
  console.log(req.body);
  if (err) return next(err);
  res.send(req.body);
});

router.post('/', (req, res, next) => {
  User.create(req.body, (err, createdUser) => {
    if (err) return res.redirect('/users/new');
    res.redirect('/users');
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    console.log(user);
    if (err) return next(err);
    res.render('singleUser', { user });
  });
});

router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    console.log(user);
    if (err) return next(err);
    res.render('editUserForm', { user: user });
  });
});

router.post('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, user) => {
    // console.log(user);
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.get('/:id/delete', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

module.exports = router;
