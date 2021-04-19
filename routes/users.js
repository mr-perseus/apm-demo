var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.query.fail === "yes") {
    res.status(500).send("this is supposed to fail");
  } else {
    res.send('respond with a resource');
  }
});

module.exports = router;
