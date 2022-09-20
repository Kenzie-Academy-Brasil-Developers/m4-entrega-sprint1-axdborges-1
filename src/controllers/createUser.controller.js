import createUserService from '../services/createUser.service';

const createUserController = (req, res) => {
	const { name, email } = req.body;

	const user = createUserService(name, email);

	return res.status(201).json(user);
};

export default createUserController;
