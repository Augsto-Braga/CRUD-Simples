import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';
import UsersRepository from '../infra/typeorm/repositories/UsersRepository';

class CreateUserService {
  private usersRepository = new UsersRepository();
  public async execute({
    username,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const checkEmailExists = await this.usersRepository.findByEmail(email);

    if (checkEmailExists) {
      throw new Error('Email error');
    }

    const checkUsernameExists = await this.usersRepository.findByUsername(
      username,
    );

    if (checkUsernameExists) {
      throw new Error('Username error');
    }

    const user = await this.usersRepository.create({
      username,
      email,
      password,
    });

    return user;
  }
}

export default CreateUserService;
