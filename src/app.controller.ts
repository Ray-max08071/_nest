import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Controller 中可以添加统一后缀
@Controller('/api')
export class AppController {
  constructor (private readonly appService: AppService) { }

  @Get()
  getHello (): string {
    return 'Hello NestJS!';
  }
}

