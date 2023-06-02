import { PartialType } from '@nestjs/mapped-types';
import { CreateOthersDTO } from './create-others.dto';

export class UpdateOthersDto extends PartialType(CreateOthersDTO) {}
