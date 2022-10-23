import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class UpdateTrackDTO {
  @Type(() => Number)
  @IsNumber()
  genreId: number;

  @IsString()
  title: string;

  @IsString()
  author: string;
}
