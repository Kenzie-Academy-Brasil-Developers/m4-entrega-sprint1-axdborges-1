import createUserService from '../services/createUser.service';

const createUserController = async (req, res) => {
	const { name, email, password, isAdm } = req.body;

	const user = await createUserService(name, email, password);

	return res.status(201).json(user);
};

export default createUserController;
