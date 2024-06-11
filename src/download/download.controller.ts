import { Body, Controller, Delete, Get, Param, Patch, Post, StreamableFile } from '@nestjs/common';
import * as fs from 'fs';
import { DownloadService } from './download.service';
import { CreateDownloadDto } from './dto/create-download.dto';
import { UpdateDownloadDto } from './dto/update-download.dto';

@Controller('download')
export class DownloadController {
  constructor (private readonly downloadService: DownloadService) { }

  @Post()
  create (@Body() createDownloadDto: CreateDownloadDto) {
    return this.downloadService.create(createDownloadDto);
  }

  @Get('download1')
  findAll () {
    const stream = fs.createReadStream('README.md');
    return new StreamableFile(stream, {
      type: 'text/plain',
      disposition: `attachment;filename='README'`,
    })
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return this.downloadService.findOne(+id);
  }

  @Patch(':id')
  update (@Param('id') id: string, @Body() updateDownloadDto: UpdateDownloadDto) {
    return this.downloadService.update(+id, updateDownloadDto);
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.downloadService.remove(+id);
  }
}
