import { EventsEntity } from './events.entity';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventsDTO } from './dto/create-events.dto';
import { UpdateEventsDto } from './dto/update-events.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventsEntity)
    private readonly eventsRepository: Repository<EventsEntity>,
  ) {}

  async findAll() {
    return this.eventsRepository.find();
  }

  async findOne(id: string): Promise<EventsEntity[]> {
    const events = await this.eventsRepository.find({ where: { id } });
    if (!events) {
      throw new HttpException(`Product ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return events;
  }

  create(eventsDTO: CreateEventsDTO) {
    const events = this.eventsRepository.create(eventsDTO);
    return this.eventsRepository.save(events);
  }

  async update(id: string, updateEvent: UpdateEventsDto) {
    const products = await this.eventsRepository.preload({
      id,
      ...updateEvent,
    });

    if (!products) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return this.eventsRepository.save(products);
  }

  async remove(id: string) {
    const events = await this.eventsRepository.findOne({ where: { id } });

    if (!events) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return this.eventsRepository.remove(events);
  }
}
