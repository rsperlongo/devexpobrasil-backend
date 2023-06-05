import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OthersService } from './others.service';
import { UpdateOthersDto } from './dto/update-others.dto';

@Controller('exhibitors')
export class OthersController {
  constructor(private othersService: OthersService) {}

  @Post('create')
  async postExhibitors() {
    return this.othersService.create();
  }

  @Get()
  async getExhibitors() {
    return this.othersService.findAll();
  }

  @Get('/:id')
  async getByIdExhibitors(@Param('id') id: string) {
    return await this.othersService.findOne(id);
  }

  @Get('/:exhibitorsName')
  async getByNameExhibitors(@Param('exhibitorsName') exhibitorsName: string) {
    return await this.othersService.findOne(exhibitorsName);
  }

  @Patch('/:id')
  async updateCalendar(
    @Param('id') id: string,
    @Body() updateExhibitors: UpdateOthersDto,
  ): Promise<UpdateOthersDto> {
    return await this.othersService.update(id, updateExhibitors);
  }

  @Delete('/:id')
  async removeProduct(@Param('id') id: string) {
    return this.othersService.remove(id);
  }
}
