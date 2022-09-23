import editUsersService from '../services/editUsers.service';

const editUsersController = async (req, res) => {
	const { id } = req.params;
	const data = req.body;

	const edited = await editUsersService(id, data);

	return res.status(200).json(edited);
};

export default editUsersController;
