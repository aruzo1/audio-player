import { IsNumberString, IsOptional } from 'class-validator';

export class FindAllQueryTrack {
  @IsOptional()
  @IsNumberString()
  genreId?: number;
}
