import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { DemoService } from './demo.service';
import { UpdateDemoDto } from './dto/update-demo.dto';

import * as svgCaptcha from 'svg-captcha';

@Controller('demo')
export class DemoController {
  constructor (private readonly demoService: DemoService) { }

  @Get()
  findAll () {
    return this.demoService.findAll();
  }


  @Patch(':id')
  update (@Param('id') id: string, @Body() updateDemoDto: UpdateDemoDto) {
    return this.demoService.update(+id, updateDemoDto);
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.demoService.remove(+id);
  }
  @Get('/code')
  createCode (@Req() req: any, @Res() res: any) {
    const captch = svgCaptcha.create({
      size: 4, // 生成几个字符的验证码
      fontSize: 50, // 生成字体大小
      width: 100, // 生成图片的宽度
      height: 40, // 生成图片的高度
      background: '#cc9966' // 生成图片的背景颜色
    })
    req.session.code = captch.text // 存储验证码到Session
    res.type('image/svg+xml')
    res.send(captch.data)
  }

  @Post('create')
  create (@Req() req: any, @Body() body: any) {
    console.log(body, req?.session?.code)
  }
}
