import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: UserService) {}

//   @Get()
//   getallusers(): string {
//     console.log('getallusers')
//     return "Not permitted";
//   }

  @Get()
  getusers(): Promise<any> {
    return this.appService.getusers();
  }
}
