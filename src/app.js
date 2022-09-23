import express from 'express';
import 'dotenv/config';
import usersRoutes from './routes/users.routes';
import onlyUserRouter from './routes/onlyUser.routes';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/users', usersRoutes);
app.use('/user', onlyUserRouter);

app.listen(PORT, () => {
	console.log(`server is running at port ${PORT}`);
});

export default app;
