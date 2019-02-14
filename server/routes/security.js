const express = require("express");
const createToken = require('../libs/auth').createToken;
const router = express.Router();

router.post('/login_check', (req, res) => {
	console.log(req.body.username, req.body.password);
	
	if(req.body.username === 'user' && req.body.password === "pass"){
		const token = createToken({
			username: "user"
		});
		res.send({
			token
		})
	} else {
		res.status(400).send({
			error: "Invalid user"
		})
	}
})

module.exports = router;