import users from '../database';

import * as bcrypt from 'bcryptjs';

const checkLoginMiddleware = (req, res, next) => {
	const { email, password } = req.body;

	const emailCheked = users.find((user) => user.email === email);

	if (!emailCheked) {
		return res.status(401).json({ message: 'Email or password incorrect.' });
	}

	const passwordChecked = bcrypt.compareSync(password, emailCheked.password);

	if (!passwordChecked) {
		return res.status(401).json({ message: 'Email or password incorrect.' });
	}

	next();
};

export default checkLoginMiddleware;
