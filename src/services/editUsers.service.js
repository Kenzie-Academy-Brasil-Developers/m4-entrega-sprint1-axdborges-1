import users from '../database';

import * as bcrypt from 'bcryptjs';

const editUsersService = async (id, data) => {
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
		const hashedPassword = await bcrypt.hash(data.password, 10);
		user.password = hashedPassword;
	}
	user.updatedAt = new Date();

	return 'user updated with success';
};

export default editUsersService;
