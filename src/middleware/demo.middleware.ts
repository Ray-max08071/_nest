import { NextFunction, Request, Response } from 'express';
export function DemoMiddleware (req: Request, res: Response, next: NextFunction) {
  console.log('使用函数定义的中间件');
  next()
}