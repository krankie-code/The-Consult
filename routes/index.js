var express = require('express');
var router = express.Router();
let Song = require('../models/song');

/* GET home page. */

router.get('/index', function (req, res, next) {
  Song.find()
  .populate({
    path: 'comments.userId userId',
    model: 'User'
  })
    .then(songs => {
      res.render('index', { songs })
    })
  
  .catch (err => {
    console.log(err)
  })
});




module.exports = router;


