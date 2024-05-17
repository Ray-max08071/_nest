import { Global, Module } from '@nestjs/common';
import { DbService } from './db.servive';


@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [DbService],
  exports: [DbService],
})

export class DbModule { }