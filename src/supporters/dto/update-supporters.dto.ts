import { PartialType } from '@nestjs/mapped-types';
import { CreateSupportesDTO } from './create-supporters.dto';

export class UpdateSupportersDto extends PartialType(CreateSupportesDTO) {}
