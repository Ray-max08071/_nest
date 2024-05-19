import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use (req: Request, res: Response, next: NextFunction) {
    // rep 获取请求信息
    console.log('log中间件 next之前')
    next()
    // res 是返回给前端的响应内容
    // 通过response.status 可以设置相应的内容
    // 通过response.header 可以给浏览器设置cookie
    console.log('log中间件 next之后')
  }
}