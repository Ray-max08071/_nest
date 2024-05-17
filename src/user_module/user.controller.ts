import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
export class userController {
  // constructor (private readonly userService: UserService) { }
  
  private readonly userService: UserService
  constructor (userService: UserService) {
    this.userService = userService;
  }

  @Get()
  getUserList () {
    return this.userService.getList()
  }
}