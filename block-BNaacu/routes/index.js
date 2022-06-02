var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  var sports = ['cricket', 'footbal', 'hollyball'];
  res.render('i', { sports: sports });
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
