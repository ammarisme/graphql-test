import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getallusers(): string {
    console.log('getallusers')
    return "Not permitted";
  }

  @Get('/users:id')
  getuser(@Param('id') id: string): Promise<any> {
    console.log(id)
    return this.appService.getuser(id);
  }
}
