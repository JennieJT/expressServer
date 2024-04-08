var express = require('express');
var router = express.Router();
var path = require('path');
var dataPath = require('../utils/globalDatabase');
var fs = require("fs");

/* GET users listing. */
router.post('/', function (req, res, next) {
  let data = fs.readFileSync(dataPath);
    const delIds = req.body;
    // Converting to JSON 
    const people = JSON.parse(data);
    //people = people.filter(p => !delIds.includes(p.id));
    let newPeople = [];
    for(let i in people){
      if(!delIds.includes(people[i].id)){
        newPeople.push(people[i]);
      }
    }
    //how to write else. like a error message? catch throw? 
    fs.writeFileSync(dataPath, JSON.stringify(newPeople));
    res.send("200");
});



module.exports = router;
