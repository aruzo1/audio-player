import { IsIn, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterTrackDTO {
  @IsOptional()
  @Type(() => Number)
  take?: number;

  @IsOptional()
  @Type(() => Number)
  genreId?: number;

  @IsOptional()
  @IsString()
  term?: string;

  @IsOptional()
  @IsIn(['createdAt'])
  sort?: string;

  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  order?: 'ASC' | 'DESC';
}
