var express	= require('express'),
	router	= express.Router();

router.get('/me', (req, res) => {
	res.json({user: "poulet"});
});
module.exports = router;
