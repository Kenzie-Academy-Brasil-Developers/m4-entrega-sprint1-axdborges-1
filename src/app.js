import express from 'express';
import 'dotenv/config';
import usersRoutes from './routes/users.routes'

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3005;

app.use("/users", usersRoutes)

app.listen(PORT, () => {
	console.log(`server is running at port ${PORT}`);
});

export default app;
