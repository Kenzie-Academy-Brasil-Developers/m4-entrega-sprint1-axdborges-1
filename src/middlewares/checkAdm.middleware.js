import users from '../database';

const checkAdmMiddleware = (req, res, next) => {
	const userId = req.body.userId;
	const user = users.find((user) => user.id === userId);
	const isAdm = user.isAdm;

	if (isAdm) {
		next();
	} else {
		return res.status(401).json({ message: 'Unauthorized' });
	}
};

export default checkAdmMiddleware;
