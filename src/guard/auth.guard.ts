import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private readonly reflector: Reflector) { }
  canActivate (
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.token
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log('roles', roles)
    console.log('token', token)
    if (token === '123456') {
      return true
    } else {
      return false
    }
  }
}
