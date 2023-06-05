import { IsString } from 'class-validator';

export class CreateSupportesDTO {
  @IsString()
  supportersName: string;
}
