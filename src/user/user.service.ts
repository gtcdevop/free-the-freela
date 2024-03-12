import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { createUser, getUserByUsername } from "src/db/queries/authentication/authentication.query";


@Injectable()
export class UserService {
  getUserByUsername(username: string): Promise<User> {
    return getUserByUsername(username);
  }

  createUser(user: User): Promise<User> {
    return createUser(user)
  }

}