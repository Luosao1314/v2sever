import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/v2')
  getDate(@Query('data') data: string): string {
    return this.appService.getDate(data);
  }
  @Get('/getip')
  getIp(@Req() req: any): string {
    return this.appService.getIp(req);
  }
}
