import { IsDateString, IsEnum, IsString } from 'class-validator';
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

  @IsDateString()
  eventDateEnd: Date;

  @IsString()
  startTime: string;

  @IsString()
  endTime: string;

  @IsString()
  eventTime: string;

  @IsString()
  title: string;

  @IsString()
  eventDescription: string;

  @IsString()
  speakerDescription: string;

  @IsString()
  sponsor: string;

  @IsString()
  exhibitors: string;

  @IsString()
  supporters: string;

  @IsString()
  auditoriumName: string;

  @IsString()
  auditoriumDescription: string;

  @IsString()
  @IsEnum(EventType)
  eventType: EventType;
}
