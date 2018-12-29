var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var ip = req.ip;
  if(ip.substr(0,7) == '::ffff:'){
    ip = ip.substr(7);
  } 

  res.render('index', { title: 'Sakrato', ip ,author :'Arip'});
});

module.exports = router;
