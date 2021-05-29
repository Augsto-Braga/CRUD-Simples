import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const userRouter = Router();

const usersController = new UsersController();

userRouter.post('/users', usersController.create);
userRouter.get('/users', usersController.index);

export default userRouter;
