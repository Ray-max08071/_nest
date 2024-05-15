import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

// Controller 中可以添加统一后缀
@Controller('/api')
export class AppController {
  constructor (private readonly appService: AppService) { }

  // 请求完整url => api/user
  // @Get('/user/:id') 表示动态路由
  @Get('/user/:id')
  getHello (@Req() req: Request): string {
    console.log('获取用户id', req.params)
    return req.params.id;
  }

  // 请求完整url => api/name
  @Get('/name')
  getName (): string {
    return 'name';
  }
}
