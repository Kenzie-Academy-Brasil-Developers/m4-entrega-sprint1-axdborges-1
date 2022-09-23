import users from '../database';

import jwt from 'jsonwebtoken';

const loginUsersService = (data) => {
	const user = users.find((user) => user.email === data.email);

	const token = jwt.sign({ id: user.id }, 'SECRET_KEY', { expiresIn: '3h' });

	const message = {
		token: token,
	};

	return message;
};

export default loginUsersService;
