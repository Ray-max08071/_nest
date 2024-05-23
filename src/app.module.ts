import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db_module/db.module';
import { AuthGuard } from './guard/auth.guard';
import { UserModule } from './user_module/user.module';
import { DemoModule } from './demo/demo.module';
import { UploadModule } from './upload/upload.module';


@Module({
  imports: [UserModule.forRoot(), DbModule, DemoModule, UploadModule],
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
  }, {
    provide: APP_GUARD,
    useClass: AuthGuard
  }],
})
export class AppModule {
  // configure (consumer: MiddlewareConsumer) {
  //   // consumer.apply 可以传多个中间件 
  //   // 执行顺序 => 先进后出 业务逻辑在多个中间件中间执行
  //   // next() 方法表示 业务逻辑代码执行
  //   consumer.apply(LoggerMiddleware, DemoMiddleware)
  //     // * 标识所有路由都会走logger中间件
  //     // 中间件可以 传 控制器,表示该控制器下的所有路径都会生效
  //     // 也可以使用 exclude 来排除某些特定的路由和请求方式
  //     .exclude({
  //       path: 'cats',
  //       method: RequestMethod.GET
  //     })
  //     // forRoutes 指定某些路由和请求方式生效 forRoutes({ path:'/user',method:RequestMethod.GET })
  //     // forRoutes 可以传多个控制器 
  //     .forRoutes('*')

  // }

}
