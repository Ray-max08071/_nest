import { HttpException, HttpStatus } from '@nestjs/common'

export class HttpExceptionForbidden extends HttpException {
  constructor () {
    super('403禁止访问', HttpStatus.FORBIDDEN)
  }
}