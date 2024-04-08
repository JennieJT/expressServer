var express = require('express');
var router = express.Router();
var path = require('path');
var dataPath = require('../utils/globalDatabase');
var fs = require("fs");

/* GET users listing. */
router.post('/', function (req, res, next) {
  let data = fs.readFileSync(dataPath);
    const [editId, person] = req.body;
    // Converting to JSON 
    const people = JSON.parse(data);
    for(let i in people){
    if(people[i].id === editId){
      people[i] = person;
    }

  }
    fs.writeFileSync(dataPath, JSON.stringify(people));
    res.send("200");
});



module.exports = router;
