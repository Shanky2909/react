var express = require('express');
var router = express.Router();

var passport = require('passport');
var dotenv = require('dotenv');

dotenv.config();

router.get(
  '/login',
  passport.authenticate(
    'auth0',
    {
      scope: 'openid email profile',
    },
    function (req, res) {
      res.redirect('/');
    }
  )
);

module.exports = router;
