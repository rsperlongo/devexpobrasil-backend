import { PartialType } from '@nestjs/mapped-types';
import { CreateSponsorDTO } from './create-sponsors.dto';

export class UpdateSponsorsDto extends PartialType(CreateSponsorDTO) {}
