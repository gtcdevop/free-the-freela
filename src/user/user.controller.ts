import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';


@Controller("auth")
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get("/login/:username/:password")//
    getUserByUsername(@Param('username') username: string,
        @Param('password') password: string) {
        return this.userService.getUserByUsername(username, password);
    }

    @Post("/register")
    createUser(@Body() user: User) {
        return this.userService.createUser(user);
    }
}