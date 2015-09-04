var express = require('express');
var router = express.Router();
var invoiceController = require('./controllers/invoiceController');
var log = require("./lib/logger");

// redirect home page to API documentation
router.get('/', function(req, res, next) {
  res.redirect('//payload.pk/api');
});

// invoice
log.debug(typeof invoiceController.post);
router.post('/invoice', invoiceController.post);

module.exports = router;