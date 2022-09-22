import { response } from 'express';
import users from '../database';

const editUsersService = (id, data) => {
	const user = users.find((element) => element.id === id);

	if (!user) {
		return 'user not found';
	}

	if (!!data.name) {
		user.name = data.name;
	}
	if (!!data.email) {
		user.email = data.email;
	}
	if (!!data.password) {
		user.password = data.password;
	}
	user.updatedAt = new Date();

	return 'user updated with success';
};

export default editUsersService;
