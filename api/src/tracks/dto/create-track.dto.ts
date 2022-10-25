import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateTrackDTO {
  @Type(() => Number)
  @IsNumber()
  genreId: number

  @IsString()
  title: string;

  @IsString()
  author: string;
}
