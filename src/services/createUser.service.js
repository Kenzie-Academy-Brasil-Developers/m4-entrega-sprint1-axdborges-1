import users from '../database';
import { v4 as uuidv4 } from 'uuid';

const createUserService = (name, email) => {
	const userAlreadyExists = users.find((user) => user.email === email);

	if (userAlreadyExists) {
		return 'This email address is already being used';
	}

	const newUser = {
		name,
		email,
		id: uuidv4(),
	};

	users.push(newUser);

	return newUser;
};

export default createUserService;
