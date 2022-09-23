import users from '../database';

import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcryptjs';

const createUserService = async (name, email, password, isAdm) => {
	const hashedPassword = await bcrypt.hash(password, 10);

	const newUser = {
		name,
		email,
		password: hashedPassword,
		isAdm,
		createdAt: new Date(),
		updatedAt: new Date(),
		id: uuidv4(),
	};

	users.push(newUser);

	const userResponse = {
		name,
		email,
		cratedAt: newUser.createdAt,
		updatedAt: newUser.updatedAt,
		id: newUser.id,
	};

	return userResponse;
};

export default createUserService;
