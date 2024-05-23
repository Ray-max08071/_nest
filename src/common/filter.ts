import { ArgumentsHost, Catch, ExceptionFilter, HttpException, } from '@nestjs/common';
import { Request, Response } from 'express';
@Catch(HttpException)
export class Filter implements ExceptionFilter {
  catch (exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const requset = ctx.getRequest<Request>();

    const status = exception.getStatus();
    const message = exception.message
    response.status(status).json({
      data: message,
      time: new Date(),
      path: requset.url, // 请求路径
      method: requset.method, // 请求方法
      statusCode: status, // 状态码
    })
  }
}