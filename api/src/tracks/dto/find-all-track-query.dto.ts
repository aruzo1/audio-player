import { IsNumberString, IsOptional } from 'class-validator';

export class FindAllTrackQueryDTO {
  @IsOptional()
  @IsNumberString()
  category?: number;
}
