const jwt = require('jsonwebtoken');

const createToken = function (user = {}) {
	console.log(process.env.JWT_SECRET);
	console.log('test');

	return jwt.sign({
		payload: {
			firstname: user.firstname,
			username: user.username
		}
	}, process.env.JWT_SECRET, {
		expiresIn: 3600,
		algorithm: "HS256"
	});
}

const verifyToken = function (token) {
	return new Promise(
		(resolve, reject) =>
		jwt.verify(token, process.env.JWT_SECRET, 
			(err, decodedToken) => {
				if(err || !decodedToken) reject(err);
				
				resolve(decodedToken);
			}
		)
	)
}

module.exports = {
	verifyToken,
	createToken
}