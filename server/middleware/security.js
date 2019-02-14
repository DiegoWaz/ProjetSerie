const verifyJWToken = require('../libs/auth').verifyToken;

const verifyToken = (req, res, next) => {
	if (req.path == "/login_check") {
		next();
	} else {
		const auth = req.get('Authorization');

		if(!auth || !auth.startsWith('Bearer ')) {
			res.sendStatus(401);
		}

		verifyJWToken(auth.replace("Bearer ", ""))

		.then((decodedToken) => {
			req.user = decodedToken;
			next();
		})
		
		.catch(
			(error) => res.status(403).send({
				error: "ERROR",
				details: error
			})
		)
	}
}

module.exports = {
	verifyToken
}