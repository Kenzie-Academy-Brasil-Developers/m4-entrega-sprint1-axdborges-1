import loginUsersService from '../services/loginUser.service';

const loginUserController = (req, res) => {
	const userToken = loginUsersService(req.body);

	return res.status(200).json(userToken);
};

export default loginUserController;
