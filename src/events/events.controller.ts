import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventsDTO } from './dto/create-events.dto';
import { UpdateEventsDto } from './dto/update-events.dto';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post('create')
  async postEvents(@Body() events: CreateEventsDTO) {
    return this.eventsService.create(events);
  }

  @Get()
  async getEvents() {
    return this.eventsService.findAll();
  }

  @Get('/:id')
  async getByIdEvents(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch('/:id')
  async updateCalendar(
    @Param('id') id: string,
    @Body() updateEvent: UpdateEventsDto,
  ): Promise<UpdateEventsDto> {
    return this.eventsService.update(id, updateEvent);
  }

  @Delete('/:id')
  async removeProduct(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }
}
