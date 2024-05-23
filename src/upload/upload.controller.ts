import { Controller, Get, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor (private readonly uploadService: UploadService) { }

  @Post('ablum')
  @UseInterceptors(FileInterceptor('file'))
  upload (@UploadedFile() file) {
    console.log(file);
    return '上传成功';
  }

  @Get('export')
  export (@Res() res) {
    const url = join(__dirname, '../images/1716443330823.png')
    res.download(url);
  }
}
