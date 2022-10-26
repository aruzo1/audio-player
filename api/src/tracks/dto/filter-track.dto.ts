import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterTrackDTO {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  take?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  genreId?: number;

  @IsOptional()
  @IsString()
  term?: string;
}
