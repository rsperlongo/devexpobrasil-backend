import { IsDateString, IsEnum, IsNumber, IsString } from 'class-validator';
import { EventType } from '../events.entity';

export class CreateEventsDTO {
  @IsString()
  city: string;

  @IsString()
  uf: string;

  @IsString()
  locale: string;

  @IsString()
  address: string;

  @IsDateString()
  eventDate: Date;

  @IsString()
  description: string;

  @IsString()
  @IsEnum(EventType)
  eventType: EventType;
}
