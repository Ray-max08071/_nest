import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getList (): string {
    return '用户列表';
  }
}
