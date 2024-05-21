import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept (context: ExecutionContext, next: CallHandler): Observable<any> {
    // 拦截器在请求处理之前执行
    // 可以在拦截器中 改写返回的数据
    console.log('拦截器 Before...');
    return next
      .handle()
      .pipe(map((data) => {
        console.log('拦截器 After...');
        return {
          code: 200,
          msg: '请求成功',
          data
        }
      }),
      );
  }
}
