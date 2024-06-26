import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path'; // 引入path模块的join方法
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
  imports: [MulterModule.register({
    storage: diskStorage({
      destination: join(__dirname, '../images'),
      filename: (req, file, callback) => {
        const filename = `${new Date().getTime() + extname(file.originalname)}`
        return callback(null, filename)
      }
    })
  })],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule { }
