import { Module } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { LoanController } from './loan.controller';
import { LoanService } from './loan.service';

@Module({
    controllers: [LoanController],
    providers: [LoanService, PrismaService],
})
export class LoanModule { }