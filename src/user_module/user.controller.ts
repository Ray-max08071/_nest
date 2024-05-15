import { Controller, Get } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('api/user')
export class userController {
  constructor (private readonly userService: UserService) { }

  @Get()
  getUserList () {
    return '获取用户列表'
  }
}