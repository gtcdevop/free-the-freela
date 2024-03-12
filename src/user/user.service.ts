import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { createUser, getUserByUsername } from "src/db/queries/authentication/authentication.query";


@Injectable()
export class UserService {

  constructor(private readonly jwtService: JwtService) {

  }

  getUserByUsername(username: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      getUserByUsername(username, password).then((user) => {
        delete user.password // remove the password from the user object
        resolve(this.jwtService.sign(this.applyRoles(user)));
      }).catch((error) => {
        console.log(error)
        reject("User not found.")
      });
    })
  }

  createUser(user: User): Promise<User> {
    return createUser(user)
  }

  private applyRoles(user: User): any {
    var responseObj = { ...user, roles: [] }
    if (user.isAdmin) {
      responseObj.roles.push("admin")
    }
    if (user.isApplicant) {
      responseObj.roles.push("applicant")
    }
    // remove the booleans
    delete responseObj.isAdmin;
    delete responseObj.isApplicant;
    // return the response object
    return responseObj
  }

}