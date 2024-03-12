import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LoanModule } from './loan/loan.module';

@Module({
  imports: [UserModule, LoanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
