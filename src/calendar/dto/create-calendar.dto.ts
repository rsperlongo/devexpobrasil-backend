import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';

export class CreateCalendarDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  date: string;

  @IsDateString()
  @Matches(/^\d?\d:\d{2}:\d{2}$/)
  datetime: Date;

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
