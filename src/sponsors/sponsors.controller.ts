import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SponsorsService } from './sponsors.service';
import { UpdateSponsorsDto } from './dto/update-sponsors.dto';

@Controller('sponsors')
export class SponsorsController {
  othersService: any;
  constructor(private sponsorsService: SponsorsService) {}

  @Post('create')
  async postSponsor() {
    return await this.sponsorsService.create();
  }

  @Get()
  async getExhibitors() {
    return this.sponsorsService.findAll();
  }

  @Get('/:id')
  async getByIdExhibitors(@Param('id') id: string) {
    return await this.sponsorsService.findOne(id);
  }

  @Get('/:exhibitorsName')
  async getByNameExhibitors(@Param('exhibitorsName') exhibitorsName: string) {
    return await this.sponsorsService.findOne(exhibitorsName);
  }

  @Patch('/:id')
  async updateCalendar(
    @Param('id') id: string,
    @Body() updateSponsors: UpdateSponsorsDto,
  ): Promise<UpdateSponsorsDto> {
    return await this.sponsorsService.update(id, updateSponsors);
  }

  @Delete('/:id')
  async removeProduct(@Param('id') id: string) {
    return this.othersService.remove(id);
  }
}
