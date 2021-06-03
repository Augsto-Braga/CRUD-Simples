import UsersRepository from '../infra/typeorm/repositories/UsersRepository';

class DeleteUserService {
  private usersRepository = new UsersRepository();

  public async execute(id: string): Promise<void> {
    const findUser = await this.usersRepository.findById(id);

    if (!findUser) {
      throw new Error('User does not exsits');
    }

    await this.usersRepository.delete(findUser.id);
  }
}

export default DeleteUserService;
