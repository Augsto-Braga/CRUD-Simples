import User from '../infra/typeorm/entities/User';
import UsersRepository from '../infra/typeorm/repositories/UsersRepository';

class ListUsersService {
  private usersRepository = new UsersRepository();
  public async execute(): Promise<User[]> {
    const allUsers = await this.usersRepository.findAll();
    return allUsers;
  }
}

export default ListUsersService;
