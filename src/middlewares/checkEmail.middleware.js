import createUserService from '../services/createUser.service';

import users from '../database';

const checkEmailMiddleware = (req, res, next) => {
	const { email } = req.body;

	const userAlreadyExists = users.find((user) => user.email === email);

	if (userAlreadyExists) {
		return res.status(401).json('This email address is already being used');
	}

	next();
};

export default checkEmailMiddleware;
