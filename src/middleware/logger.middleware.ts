import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use (req: Request, res: Response, next: NextFunction) {
    console.log('log中间件 next之前')
    next()
    console.log('log中间件 next之后')
  }
}