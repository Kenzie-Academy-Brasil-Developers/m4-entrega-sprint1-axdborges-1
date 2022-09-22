import { Router } from 'express';

import createUserController from '../controllers/createUser.controller';
import listUsersController from '../controllers/listUsers.controller';
import editUsersController from '../controllers/editUsers.controller';
import deleteUsersController from '../controllers/deleteUsers.controller';

import checkEmailMiddleware from '../middlewares/checkEmail.middleware';

const usersRouter = Router();

usersRouter.post('', checkEmailMiddleware, createUserController);
usersRouter.get('', listUsersController);
usersRouter.patch('/:id', editUsersController);
usersRouter.delete('/:id', deleteUsersController);

export default usersRouter;
