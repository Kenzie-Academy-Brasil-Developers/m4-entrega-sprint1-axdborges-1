import { Router } from 'express';

import createUserController from '../controllers/createUser.controller';
import listUsersController from '../controllers/listUsers.controller';
import editUsersController from '../controllers/editUsers.controller';
import deleteUsersController from '../controllers/deleteUsers.controller';

import checkEmailMiddleware from '../middlewares/checkEmail.middleware';
import checkTokenMiddleware from '../middlewares/checkToken.middleware';
import checkAdmMiddleware from '../middlewares/checkAdm.middleware';

const usersRouter = Router();

usersRouter.post('', checkEmailMiddleware, createUserController);
usersRouter.get(
	'',
	checkTokenMiddleware,
	checkAdmMiddleware,
	listUsersController,
);
usersRouter.patch(
	'/:id',
	checkTokenMiddleware,
	checkAdmMiddleware,
	editUsersController,
);
usersRouter.delete(
	'/:id',
	checkTokenMiddleware,
	checkAdmMiddleware,
	deleteUsersController,
);

export default usersRouter;
