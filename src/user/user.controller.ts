import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';


@Controller("api/user")
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get("/:username")//
    getUserByUsername(@Param('username') username: string) {
        return this.userService.getUserByUsername(username);
    }

    @Post("/")
    createUser(@Body() user: User) {
        return this.userService.createUser(user);
    }
}