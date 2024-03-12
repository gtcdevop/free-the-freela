import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/db/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [JwtModule.register({ secret: 'hard!to-guess_secret' })],
    controllers: [UserController],
    providers: [UserService, PrismaService],
})
export class UserModule { }