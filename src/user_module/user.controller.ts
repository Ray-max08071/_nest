import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { DbService } from 'src/db_module/db.servive';
import { UserService } from './user.service';

@Controller('api/user')
export class userController {
  constructor (
    @Inject(UserService)
    private userService: UserService,
    @Inject(AppService)
    private appService: AppService,
    @Inject(DbService)
    private dbService: DbService // 注入db服务
  ) { }

  @Get()
  getUserList () {
    return this.userService.getList()
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