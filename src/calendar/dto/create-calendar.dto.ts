import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsString,
  isValidationOptions,
} from 'class-validator';
import { TypeEnum } from '../calendar.entity';

export class CreateCalendarDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  date: string;

  @IsDate()
  datetime: Date;

  @IsString()
  @IsNotEmpty()
  eventDescription: string;

  @IsString()
  @IsNotEmpty()
  speakerDescription: string;

  @IsEnum(isValidationOptions)
  type: TypeEnum;
}
