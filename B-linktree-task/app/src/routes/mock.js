
var express = require('express');
var router = express.Router();
var lc = require('../controller/mock');

/* MUSIC MOCK */
router.get('/spotify', function(req, res, next) {
  res.send('spotify');
});
router.get('/bandcamp', function (req, res, next) {
  res.send('bandcamp');
});
router.get('/soundcloud', function (req, res, next) {
  res.send('soundcloud');
});


/* SHOWS MOCK */
router.get('/songkick', function (req, res, next) {
  res.send('songkick');
});
router.get('/residentAdvisor', function (req, res, next) {
  res.send('residentAdvisor');
});



module.exports = router;
