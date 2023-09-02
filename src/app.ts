import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { error } from './middlewares/handle.middleware';
import { categoryRouters, loginRouters, userRouters, realEstateRouters, scheduleRouters } from './routers';


const app = express();
app.use(express.json());

app.use('/users', userRouters.userRouter)
app.use('/login', loginRouters.loginRouter)
app.use('/categories', categoryRouters.categoryRouter)
app.use('/realEstate', realEstateRouters.realEstateRouter)
app.use('/schedules', scheduleRouters.scheduleRouter)

app.use(error)

export default app;
