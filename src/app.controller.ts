import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

// Controller 中可以添加统一后缀
@Controller('/api')
export class AppController {
  constructor (
    @Inject('appService')
    private readonly appService: AppService,
    @Inject('config')
    private readonly config: any,
    @Inject('APP_CONFIG')
    private readonly appConfig: any,
  ) { }


  @Get()
  getHello (): string {
    console.log('config', this.appService);
    return 'Hello NestJS!';
  }
}

