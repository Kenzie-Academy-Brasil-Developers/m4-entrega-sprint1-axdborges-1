import users from '../database';

const deleteUsersService = (id) => {
	const userIndex = users.findIndex((element) => element.id === id);

	if (userIndex === -1) {
		return response.status(404).json('User not found');
	}

	users.splice(userIndex, 1);

	return 'user deleted with success';
};

export default deleteUsersService;
