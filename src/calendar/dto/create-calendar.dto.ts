import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCalendarDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  date: string;

  @IsString()
  datetime: string;

  @IsString()
  @IsNotEmpty()
  eventDescription: string;

  @IsString()
  @IsNotEmpty()
  speakerDescription: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}
