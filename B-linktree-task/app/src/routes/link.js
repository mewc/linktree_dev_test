var express = require('express');
var router = express.Router();
var lc = require('../controller/link');

/* GET users listing. */
router.get('/:uid', lc.getLinktree);
router.post('/', lc.makeNewLink);

module.exports = router;
