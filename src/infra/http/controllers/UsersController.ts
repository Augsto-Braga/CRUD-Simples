import { Request, Response } from 'express';

import CreateUserService from '../../../service/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const userData = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute(userData);

    return response.json(user);
  }
}
