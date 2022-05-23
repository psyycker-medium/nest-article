import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  public getHelloWorld(): string {
    return 'Hello world !';
  }
}
