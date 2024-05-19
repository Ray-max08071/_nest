import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DemoMiddleware } from './middleware/demo.middleware';

async function bootstrap () {
  const app = await NestFactory.create(AppModule);
  // 使用app.use 可以注册全局中间件
  app.use(DemoMiddleware)
  await app.listen(3000);
}
bootstrap();
