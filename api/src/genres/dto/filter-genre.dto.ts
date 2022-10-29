import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class FilterGenreDTO {
  @IsOptional()
  @Type(() => Number)
  take?: number;
}
