import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalendarEntity } from './calendar.entity';
import { Repository } from 'typeorm';
import { CreateCalendarDTO } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(CalendarEntity)
    private readonly calendarRepository: Repository<CalendarEntity>,
  ) {}

  async findAll() {
    return this.calendarRepository.find();
  }

  async findOne(id: string): Promise<CalendarEntity[]> {
    const calendar = await this.calendarRepository.find({ where: { id } });
    if (!calendar) {
      throw new HttpException(`Product ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return calendar;
  }

  create(eventsDTO: CreateCalendarDTO) {
    const events = this.calendarRepository.create(eventsDTO);
    return this.calendarRepository.save(events);
  }

  async update(id: string, updateCalendar: UpdateCalendarDto) {
    const calendar = await this.calendarRepository.preload({
      id,
      ...updateCalendar,
    });

    if (!calendar) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return this.calendarRepository.save(calendar);
  }

  async remove(id: string) {
    const calendar = await this.calendarRepository.findOne({ where: { id } });

    if (!calendar) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return this.calendarRepository.remove(calendar);
  }
}
