import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { UserService } from './user.service';

@Controller('api/user')
export class userController {
  constructor (
    @Inject(UserService)
    private userService: UserService,
    @Inject(AppService)
    private appService: AppService
  ) { }

  @Get()
  getUserList () {
    return this.userService.getList()
  }

  @Get('app')
  getAppinfo () {
    return this.appService.getHello()
  }
}