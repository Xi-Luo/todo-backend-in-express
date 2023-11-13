var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
  res.json({ code: 200, success: true, data: { data: 'success req' } })
})

module.exports = router;
