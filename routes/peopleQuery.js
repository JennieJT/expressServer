var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(path.dirname(__dirname), "data/peopleInfo.json"));
});

module.exports = router;
