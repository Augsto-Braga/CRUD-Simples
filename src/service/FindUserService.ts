import User from '../infra/typeorm/entities/User';
import UsersRepository from '../infra/typeorm/repositories/UsersRepository';

class FindUserService {
  private usersRepository = new UsersRepository();

  public async execute(id: string): Promise<User> {
    const findUser = await this.usersRepository.findById(id);

    return findUser;
  }
}

export default FindUserService;
