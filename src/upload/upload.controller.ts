import { Controller, Get, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { zip } from 'compressing';
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
  @Get('stream')
  async stream (@Res() res) {
    const url = join(__dirname, '../images/1716443330823.png')
    const tarStream = new zip.Stream()
    await tarStream.addEntry(url)
    res.setHeader('contentType', 'application/octet-stream')
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=${1716443330823}`,
    );
    tarStream.pipe(res)
  }
}
