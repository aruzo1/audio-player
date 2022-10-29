import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateTrackDTO {
  @Type(() => Number)
  genreId: number

  @IsString()
  title: string;

  @IsString()
  author: string;
}
