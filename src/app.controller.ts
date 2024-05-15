import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

// Controller 中可以添加统一后缀
@Controller('/api')
export class AppController {
  constructor (private readonly appService: AppService) { }

  // 请求完整url => api/user
  @Get('/user')
  getHello (@Req() req: Request): string {
    console.log('浏览器发送的请求', req.url)
    return this.appService.getHello();
  }

  // 请求完整url => api/name
  @Get('/name')
  getName (): string {
    return 'name';
  }
}
