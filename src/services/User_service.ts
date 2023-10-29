import { UserResponseType } from "./../interface/User_type";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { userCreate } from "../interface/User_type";
import { compare } from "bcryptjs";
import AppError from "../errors/AppErros";
import { sign } from "jsonwebtoken";
import { singInUserType } from "../interface/auth_type";

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
  async login(data: singInUserType) {
    const repo = AppDataSource.getRepository(User);

    const user: User[] | null = await repo.findBy({ email: data.email });

    if (user.length === 0) {
      throw new AppError("Invalid credentials", 401);
    }

    const { id, name, password, admin } = user[0];

    const passwordCompare: boolean = await compare(data.password, password);

    if (!passwordCompare) {
      throw new AppError("Invalid credentials", 401);
    }

    const token: string = sign(
      { userName: name, admin: admin },
      process.env.SECRET_KEY!,
      {
        subject: id.toString(),
        expiresIn: process.env.EXPIRES_IN!,
      }
    );

    return { token };
  }
}
