import { Request, Response } from 'express';

import CreateUserService from '../../../service/CreateUserService';
import DeleteUserService from '../../../service/DeleteUserService';
import FindUserService from '../../../service/FindUserService';
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

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteUserService = new DeleteUserService();
    const userId = request.params;

    await deleteUserService.execute(userId.id);
    return response.send('Usuário Deletado');
  }

  public async findUser(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const findUserService = new FindUserService();
    const userId = request.params;
    const findUser = await findUserService.execute(userId.id);

    return response.json(findUser);
  }
}
