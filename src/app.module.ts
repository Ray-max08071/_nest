import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db_module/db.module';
import { UserModule } from './user_module/user.module';

@Module({
  imports: [UserModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
