var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose')

var RoomSchema = mongoose.Schema({
    roomnumber: String,
    roomname: String
  });


// GET roomlist.

router.get('/roomlist', function(req, res) {
    var db = req.db;
    var collection = mongoose.model('Rooms', RoomSchema);
    collection.find({},{roomnumber: 1, roomname: 1},function(e,docs){
    res.json(docs);
    });
});

module.exports = router;
