import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as session from 'express-session';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap () {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 使用app.use 可以注册全局中间件
  // app.use(DemoMiddleware)

  // secret 生成服务端session签名,可以理解为加密
  // name 生成客户端cookie的名称 默认为connect.id
  // cookie 设置返回到前端的key的熟悉
  // rolling 每次请求时,将重置cookie的过期时间
  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/images'
  })
  app.use(session({ secret: 'Ray', cookie: { maxAge: 60000 }, rolling: true }))
  await app.listen(8080);

}
bootstrap();
