var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'X2O공모전 모의 투자 시스템' });
});

/* make route to invest page */
router.get('/invest', function(req, res, next) {
  res.render('pages/invest', { title: 'X2O공모전 모의 투자 시스템' });
});

/* make route to invest-list page */
router.get('/invest/list', function(req, res, next) {
  res.render('pages/invest-list', { title: 'X2O공모전 모의 투자 시스템' });
});

/* make route to result page */
router.get('/invest/result', function(req, res, next) {
  res.render('pages/invest-result', { title: 'X2O공모전 모의 투자 시스템' });
});

module.exports = router;
