import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { UserService } from './user.service';

@Module({
  // 导入其他模块
  imports: [],
  // 导出模块中的控制器
  controllers: [userController],
  // 导出模块中的提供者
  providers: [UserService],
  // 导出模块中的共享模块
  exports: []
})

export class UserModule { }