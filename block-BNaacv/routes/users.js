var express = require('express');
var router = express.Router();

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res) => {});

router.get('/', (req, res) => {
  res.render('users', { list: ['rohit', 'mayur', 'avinash', 'mohit'] });
});

router.get('/:id', (req, res) => {
  res.render('singleUser', {
    user: { name: 'ramesh', email: 'rameshk@gmail.com', age: 18 },
  });
});

router.put('/:id', (req, res) => {
  var id = req.params.id;
  console.log(req.body);
  router.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    console.log(err);
    res.json(updatedUser);
  });
});

router.delete('/:id', (req, res) => {
  router.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    res.json(`${deletedUser} was deleted`);
  });
});

module.exports = router;
