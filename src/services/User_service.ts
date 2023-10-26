import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { UserResponseType, userCreate, userType } from "../interface/User_type";

export class UsersService {
  async createUser(userData: userCreate) {
    const repo = AppDataSource.getRepository(User);

    const newUser: User = await repo.save(userData);

    const { password, ...responseUserFormated } = newUser;

    return responseUserFormated;
  }

  async findUsers() {
    const repo = AppDataSource.getRepository(User);

    const findUsers: User[] = await repo.find();

    const userResponseFormated: Array<Omit<User, "password">> = findUsers.map(
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
