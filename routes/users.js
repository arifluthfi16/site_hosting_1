var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.ip.substr(7));
  console.log(req.ip.substr(7));
});

module.exports = router;
