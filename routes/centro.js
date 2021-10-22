var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('centro');
});

router.get('/dica', (req, res) => {
  res.json();
});
router.get('/palavra/:nivel', (req, res) => {
  res.json();
});

module.exports = router;

  