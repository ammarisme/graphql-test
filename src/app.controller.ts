import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getusers(): Promise<any> {
    return this.appService.getusers();
  }

 
  //graphql Get() method
@Get(':id')
    getuser(@Param('id') id: any): Promise<any> {
    return this.appService.finduser(id);
    }


    //graphql Post() method
    @Post()
    createuser(@Body() name: string): Promise<string> {
    return this.appService.createuser(name);
    }

    //graphql Put() method
    @Put(':id')
    updateuser(@Param('id') id: any, @Body() name: string): Promise<string> {
    return this.appService.updateuser(id, name);
    }
    
}
