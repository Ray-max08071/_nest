import { Body, Controller, Get, Inject, Post, UseFilters, UsePipes } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { DbService } from 'src/db_module/db.servive';
import { AllExceptionsFilter } from 'src/http/http_exception.filter';
import { HttpExceptionForbidden } from 'src/http/http_forbodden';
import { JoiValidationPipe } from '../vaildata/vadation.pipe';
import { UserService } from './user.service';

const Joi = require('joi');

/**
 *  UseFilters 错误过滤器的三种写法
 *   1. 可以写在单个路由下面
 *   2. 可以写在Controller上面
 *   3. 可以写在全局 使用 app.useGlobalFilters(new AllExceptionsFilter)
 * */

// 定义校验类型

let schema = Joi.object({
  username: Joi.string().required(),
  age: Joi.number().required()
})

@UseFilters(new AllExceptionsFilter)
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
  // 错误过滤器要配合 HttpException 一起使用 否则无法捕获错误
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


  @Post()
  @UsePipes(new JoiValidationPipe(schema))
  createUser (@Body() body: typeof schema) {
    console.log(body)
    return 'ok'
  }
}