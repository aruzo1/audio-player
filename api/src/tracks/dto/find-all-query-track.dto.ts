import { Type } from 'class-transformer';
import { IsNumber, IsNumberString, IsOptional } from 'class-validator';

export class FindAllQueryTrack {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  genreId?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  take?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  skip?: number;
}
