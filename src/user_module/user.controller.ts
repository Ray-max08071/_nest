import { Body, Controller, Get, Inject, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { DbService } from 'src/db_module/db.servive';
import { AuthGuard } from 'src/guard/auth.guard';
import { HttpExceptionForbidden } from 'src/http/http_forbodden';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UserService } from './user.service';

const Joi = require('joi');

/**
 *  UseFilters 错误过滤器的三种写法
 *   1. 可以写在单个路由下面
 *   2. 可以写在Controller上面
 *   3. 可以写在全局 使用 app.useGlobalFilters(new AllExceptionsFilter)
 * */


// @UseFilters(new AllExceptionsFilter)
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
  @UseGuards(AuthGuard)
  getAppinfo () {
    return this.appService.getHello()
  }

  @Get('db')
  getDbinfo () {
    return this.dbService.getData()
  }


  @Post()
  @UseInterceptors(LoggingInterceptor)
  createUser (@Body() createCatDto: CreateCatDto,) {
    console.log(createCatDto)
    return createCatDto
  }
}