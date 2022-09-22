import deleteUsersService from '../services/deleteUsers.service';

const deleteUsersController = (req, res) => {
	const { id } = req.params;

	const deleted = deleteUsersService(id);

	return res.json(deleted);
};

export default deleteUsersController;
