import { IsString } from 'class-validator';

export class UpdateTrackDTO {
  @IsString()
  title: string;

  @IsString()
  author: string;
}
