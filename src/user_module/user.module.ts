import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { userController } from './user.controller';
import { UserService } from './user.service';

@Module({
  // 导入其他模块
  // imports: [],
  // // 导出模块中的控制器
  // controllers: [userController],
  // // 导出模块中的提供者
  // providers: [UserService, AppService],
  // // 导出模块中的共享模块
  // exports: []
})

export class UserModule {
  static forRoot () {
    return {
      // 全局注册模块
      // global: true,
      module: UserModule,
      providers: [UserService, AppService],
      // exports: [UserService, AppService],
      controllers: [userController],
    };
  }
}