var express = require('express'),
	router = express.Router();

//ROUTES
router.use('/auth', require('./auth'));
router.use('/api', require('./api'));


router.get('/', function(request, response){
	response.render('index');
});
module.exports = router;