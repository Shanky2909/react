var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('layout', { title: 'Auth0 Web Application' });
});

module.exports = router;
