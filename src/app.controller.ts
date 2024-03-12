import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@prisma/client';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("")
  getHello(): string {
    return this.appService.getHello();
  }
}
