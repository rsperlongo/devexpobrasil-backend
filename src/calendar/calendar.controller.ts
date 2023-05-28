import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CreateCalendarDTO } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';

@Controller('calendar')
export class CalendarController {
  constructor(private calendarService: CalendarService) {}

  @Post('create')
  async postCalendar(@Body() calendar: CreateCalendarDTO) {
    return this.calendarService.create(calendar);
  }

  @Get()
  async getCalendar() {
    return this.calendarService.findAll();
  }

  @Patch('/:id')
  async updateCalendar(
    @Param('id') id: string,
    @Body() updateEvent: UpdateCalendarDto,
  ): Promise<UpdateCalendarDto> {
    return this.calendarService.update(id, updateEvent);
  }

  @Delete('/:id')
  async removeProduct(@Param('id') id: string) {
    return this.calendarService.remove(id);
  }
}
