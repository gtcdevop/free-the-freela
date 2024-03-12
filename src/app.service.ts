import { db } from './db/connection';
import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client'

import { getUserByUsername, createUser } from "./db/queries/authentication/authentication.query";

@Injectable()
export class AppService {


  constructor() {

  }

  getHello(): string {
    return 'Hello World!';
  }





}
