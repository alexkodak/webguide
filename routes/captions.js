var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose')


  var captionSchema = mongoose.Schema({
      room: String,
      reference: String,
      title: String
    });


    /* GET caption page. */
    router.get('/room=:room', function(req, res, next, populateCaptionList) {
      res.render('captionlist', { title: "Room " + req.params.room });
    });

// GET individual room details and captions list

router.get('/:room', function(req, res) {
  var db = req.db;
  var room = req.params.room
  var collection = mongoose.model('opus', captionSchema);
  collection.find({room: room},{reference: 1, title: 1},function(e,docs){
  res.json(docs);
  });
});

module.exports = router;
