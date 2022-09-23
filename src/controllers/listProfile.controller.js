import listProfileService from '../services/listProfile.service';

const listProfileController = (req, res) => {
	const id = req.body.userId;

	const user = listProfileService(id);

	return res.status(200).json(user);
};

export default listProfileController;
