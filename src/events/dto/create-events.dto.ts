import { IsDate, IsDateString, IsString } from 'class-validator';

export class CreateEventsDTO {
  @IsString()
  city: string;

  @IsString()
  uf: string;

  @IsString()
  locale: string;

  @IsString()
  address: string;

  @IsString()
  description: string;

  @IsDate()
  eventDate: Date;
}
