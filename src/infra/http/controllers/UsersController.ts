import { Request, Response } from 'express';

import CreateUserService from '../../../service/CreateUserService';
import ListUsersService from '../../../service/ListUsersService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createUserService = new CreateUserService();

    const userData = request.body;

    const user = await createUserService.execute(userData);

    return response.json(user);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listUsersService = new ListUsersService();
    const allUsers = await listUsersService.execute();

    return response.json(allUsers);
  }
}
