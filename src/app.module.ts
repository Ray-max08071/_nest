import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db_module/db.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UserModule } from './user_module/user.module';


@Module({
  imports: [UserModule.forRoot(), DbModule],
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
      // 动态添加provider
      return {
        db: 'mongodb://localhost:27017/test',
        port: 8080
      }
    }
  }],
})
export class AppModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
      // * 标识所有路由都会走logger中间件
      .forRoutes('*')
  }

}
