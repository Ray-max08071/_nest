import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';

// Controller 中可以添加统一后缀
@Controller('/api')
export class AppController {
  constructor (
    /**
     * 当我们在使用service时,正常情况下 我们需要在 module中去进行依赖注入,
     * 但有时我们不能确定依赖是否正确注入时,可以使用Optional装饰器,
     * Optional装饰器,可以让当前service变为可选的,从而保障项目正常运行
     * */
    @Optional()
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

