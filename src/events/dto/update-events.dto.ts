import { PartialType } from '@nestjs/mapped-types';
import { CreateEventsDTO } from './create-events.dto';

export class UpdateEventsDto extends PartialType(CreateEventsDTO) {}
