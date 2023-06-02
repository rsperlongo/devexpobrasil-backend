import { IsString } from 'class-validator';

export class CreateSponsorDTO {
  @IsString()
  sponsorName: string;
}
