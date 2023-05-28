import { IsDateString, IsString } from 'class-validator';

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
}
