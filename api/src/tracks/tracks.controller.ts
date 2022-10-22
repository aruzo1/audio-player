import {
  Controller,
  Post,
  UseInterceptors,
  Body,
  Get,
  Param,
  UploadedFiles,
  BadRequestException,
  NotFoundException,
  HttpCode,
  Put,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateTrackDTO } from './dto/create-track.dto';
import { UpdateTrackDTO } from './dto/update-track.dto';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private tracksService: TracksService) {}

  @Get()
  findAll() {
    return this.tracksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const track = this.tracksService.findOne(id);

    if (!track) throw new NotFoundException();
    return track;
  }

  @Get(':id/prev')
  async findPrev(@Param('id') id: number) {
    const track = await this.tracksService.findPrevOrNext(id);

    if (!track) throw new NotFoundException();
    return track;
  }

  @Get(':id/next')
  async findNext(@Param('id') id: number) {
    const track = await this.tracksService.findPrevOrNext(id, true);

    if (!track) throw new NotFoundException();
    return track;
  }

  @Put(':id')
  @HttpCode(204)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'track', maxCount: 1 },
      { name: 'cover', maxCount: 1 },
    ]),
  )
  update(
    @UploadedFiles()
    {
      track,
      cover,
    }: { track?: Express.Multer.File[]; cover?: Express.Multer.File[] },
    @Param('id') id: number,
    @Body() updateTrackDTO: UpdateTrackDTO,
  ) {
    const validFiles = this.tracksService.validateTrackAndCover(track, cover);

    return this.tracksService.update(id, updateTrackDTO, validFiles);
  }

  @Post()
  @HttpCode(201)
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
    const validFiles = this.tracksService.validateTrackAndCover(track, cover);

    if (!validFiles.track || !validFiles.cover) throw new BadRequestException();
    return this.tracksService.create(createTrackDTO, validFiles);
  }
}
