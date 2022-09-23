import users from '../database';

const listProfileService = (userId) => {
	const user = users.find((user) => user.id === userId);
	const { name, email, isAdm, createdAt, updatedAt, id } = user;

	const responseUser = {
		name,
		email,
		isAdm,
		createdAt,
		updatedAt,
		id,
	};

	return responseUser;
};

export default listProfileService;
