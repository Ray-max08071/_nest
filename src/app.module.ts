import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db_module/db.module';
import { UserModule } from './user_module/user.module';

@Module({
  imports: [UserModule, DbModule],
  controllers: [AppController],
  providers: [{
    provide: 'appService',
    useClass: AppService
  }, {
    provide: 'config',
    useValue: {
      db: 'mongodb://localhost:27017/test',
      port: 3000
    }
  }, {
    provide: 'APP_CONFIG',
    useFactory: () => {
      return {
        db: 'mongodb://localhost:27017/test',
        port: 8080
      }
    }
  }],
})
export class AppModule { }
