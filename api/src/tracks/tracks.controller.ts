import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Body,
  Get,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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
  @UseInterceptors(FileInterceptor('track', { dest: 'media' }))
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10000000 }),
          new FileTypeValidator({ fileType: 'audio/mpeg' }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body() createTrackDTO: CreateTrackDTO,
  ) {
    return this.tracksService.create(createTrackDTO, file.filename);
  }
}
