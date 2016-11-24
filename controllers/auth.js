var express	= require('express'),
	router	= express.Router();

router.get('/', (req, res) => {
	res.redirect('/auth/login');
});
router.get('/login', function(req, res) {
	console.log('Login page');
});

router.get('/register', (req, res) => {
	console.log('Register page');
});

module.exports = router;
