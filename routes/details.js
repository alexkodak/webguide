var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose')


  var captionSchema = mongoose.Schema({
      room: String,
      reference: String,
      title: String,
      details: String
    });

// GET individual room details and captions list

router.get('/:room/:caption', function(req, res) {
  var db = req.db;
  var room = req.params.room;
  var caption = req.params.caption
  var collection = mongoose.model('opus', captionSchema);
  collection.find({room: room, reference: caption},{title: 1, details: 1},function(e,docs){
  res.json(docs);
  });
});


module.exports = router;
