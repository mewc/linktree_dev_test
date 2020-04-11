
var express = require('express');
var router = express.Router();
var mc = require('../controller/mock');

router.get('/:provider', mc.getForProvider);

module.exports = router;
