import {
  Controller,
  Post,
  UseInterceptors,
  MaxFileSizeValidator,
  FileTypeValidator,
  Body,
  Get,
  Param,
  UploadedFiles,
  BadRequestException,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateTrackDTO } from './dto/create-track.dto';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private tracksService: TracksService) {}

  @Get()
  findAll() {
    return this.tracksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tracksService.findOne(id);
  }

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'track', maxCount: 1 },
      { name: 'cover', maxCount: 1 },
    ]),
  )
  create(
    @UploadedFiles()
    {
      track,
      cover,
    }: { track?: Express.Multer.File[]; cover?: Express.Multer.File[] },
    @Body() createTrackDTO: CreateTrackDTO,
  ) {
    if (
      !track[0] ||
      !cover[0] ||
      !new MaxFileSizeValidator({ maxSize: 10000000 }).isValid(track[0]) ||
      !new FileTypeValidator({ fileType: 'audio/mpeg' }).isValid(track[0]) ||
      !new MaxFileSizeValidator({ maxSize: 500000 }).isValid(cover[0]) ||
      !new FileTypeValidator({ fileType: 'image/jpeg' }).isValid(cover[0])
    ) {
      throw new BadRequestException();
    }

    return this.tracksService.create(
      createTrackDTO,
      track[0].filename,
      cover[0].filename,
    );
  }
}