import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { error } from './middlewares/handle.middleware';
import { userRouter } from './routers';

const app = express();
app.use(express.json());

app.use('/users', userRouter)

app.use(error)

export default app;
