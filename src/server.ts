import express from 'express';

import userRouter from './infra/http/routes/user.routes';
import './infra/typeorm';

const app = express();

app.use(express.json());

app.use(userRouter);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
