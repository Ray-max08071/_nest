import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  getData (): string {
    return '我就是我';
  }
}