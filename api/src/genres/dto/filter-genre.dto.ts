import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class FilterGenreDTO {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  take?: number;
}
