import { Router } from 'express';

import loginUserController from '../controllers/loginUser.controller';
import listProfileController from '../controllers/listProfile.controller';
import editUsersController from '../controllers/editUsers.controller';
import deleteUsersController from '../controllers/deleteUsers.controller';

import checkLoginMiddleware from '../middlewares/checkLogin.middleware';
import checkTokenMiddleware from '../middlewares/checkToken.middleware';

const onlyUserRouter = Router();

onlyUserRouter.post('/login', checkLoginMiddleware, loginUserController);
onlyUserRouter.get('/profile', checkTokenMiddleware, listProfileController);
onlyUserRouter.patch('/:id', checkTokenMiddleware, editUsersController);
onlyUserRouter.delete('/:id', checkTokenMiddleware, deleteUsersController);

export default onlyUserRouter;
