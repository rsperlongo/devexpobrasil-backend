import { IsString } from 'class-validator';

export class CreateOthersDTO {
  @IsString()
  exhibitorsName: string;
}
