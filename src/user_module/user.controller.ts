import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { DbService } from 'src/db_module/db.servive';
import { HttpExceptionForbidden } from 'src/http/http_forbodden';
import { UserService } from './user.service';

@Controller('api/user')
export class userController {
  constructor (
    @Inject(UserService)
    private readonly userService: UserService,
    @Inject(AppService)
    private readonly appService: AppService,
    @Inject(DbService)
    private readonly dbService: DbService, // 注入db服务
    // 注入配置文件
  ) { }

  @Get()
  getUserList () {
    console.log('代码逻辑执行')
    const randow = Math.random()
    if (randow > 0.5) {
      throw new HttpExceptionForbidden()
    } else {
      return this.userService.getList()
    }
  }

  @Get('app')
  getAppinfo () {
    return this.appService.getHello()
  }

  @Get('db')
  getDbinfo () {
    return this.dbService.getData()
  }
}