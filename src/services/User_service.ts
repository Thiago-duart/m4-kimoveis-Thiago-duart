import { UserResponseType } from "./../interface/User_type";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { userCreate } from "../interface/User_type";

export class UsersService {
  async createUser(userData: userCreate): Promise<UserResponseType> {
    const repo = AppDataSource.getRepository(User);

    const createUser: User = await repo.save(repo.create(userData));

    const { password, ...responseUserFormated } = createUser;

    return responseUserFormated;
  }

  async findUsers(): Promise<Array<UserResponseType>> {
    const repo = AppDataSource.getRepository(User);

    const findUsers: User[] = await repo.find();

    const userResponseFormated: Array<UserResponseType> = findUsers.map(
      (user) => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      }
    );

    return userResponseFormated;
  }

  updateUser() {}
  deleteUser() {}
}
