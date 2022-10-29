import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

export class UpdateTrackDTO {
  @Type(() => Number)
  genreId: number;

  @IsString()
  title: string;

  @IsString()
  author: string;
}
