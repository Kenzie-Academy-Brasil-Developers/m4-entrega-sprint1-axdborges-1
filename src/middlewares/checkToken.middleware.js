import jwt from 'jsonwebtoken';

const checkTokenMiddleware = (req, res, next) => {
	let token = req.headers.authorization;

	if (!token) {
		return res.status(401).json({ message: 'Token not found' });
	}

	token = token.split(' ')[1];
	jwt.verify(token, 'SECRET_KEY', (error, decoded) => {
		if (error) {
			return res.status(401).json({ message: 'token invalid' });
		}

		req.body.userId = decoded.id;
	});

	next();
};

export default checkTokenMiddleware;
