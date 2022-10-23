import {
  FileTypeValidator,
  Injectable,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrackDTO } from './dto/create-track.dto';
import { FindAllQueryTrack } from './dto/find-all-query-track.dto';
import { UpdateTrackDTO } from './dto/update-track.dto';
import { Track } from './track.entity';

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(Track) private tracksRepository: Repository<Track>,
  ) {}

  async findAll({ genreId }: FindAllQueryTrack) {
    return this.tracksRepository.find({ where: { genreId } });
  }

  findOne(id: number) {
    return this.tracksRepository.findOneBy({ id });
  }

  async findPrevOrNext(id: number, next?: boolean) {
    return this.tracksRepository
      .createQueryBuilder('track')
      .where((qb) => {
        const createdAt = qb
          .subQuery()
          .select('track.createdAt')
          .from(Track, 'track')
          .where({ id })
          .getQuery();

        return `track.createdAt ${next ? '>' : '<'} ${createdAt}`;
      })
      .orderBy('track.createdAt', next ? 'ASC' : 'DESC')
      .getOne();
  }

  async update(
    id: number,
    updateTrackDTO: UpdateTrackDTO,
    files: { track?: string; cover?: string },
  ) {
    const result = await this.tracksRepository
      .createQueryBuilder('track')
      .update(Track)
      .set({ ...updateTrackDTO, ...files })
      .where({ id })
      .execute();

    return result.affected;
  }

  create(
    createTrackDTO: CreateTrackDTO,
    files: { track?: string; cover?: string },
  ) {
    const track = this.tracksRepository.create({
      ...createTrackDTO,
      ...files,
    });

    return this.tracksRepository.save(track);
  }

  async delete(id: number) {
    const result = await this.tracksRepository
      .createQueryBuilder()
      .delete()
      .from(Track)
      .where({ id })
      .execute();

    return result.affected;
  }

  validateTrackAndCover(
    track?: Express.Multer.File[],
    cover?: Express.Multer.File[],
  ) {
    const result: { track?: string; cover?: string } = {};

    if (
      track &&
      new MaxFileSizeValidator({ maxSize: 10000000 }).isValid(track[0]) &&
      new FileTypeValidator({ fileType: 'audio/mpeg' }).isValid(track[0])
    ) {
      result.track = track[0].filename;
    }
    if (
      cover &&
      new MaxFileSizeValidator({ maxSize: 500000 }).isValid(cover[0]) &&
      new FileTypeValidator({ fileType: 'image/jpeg' }).isValid(cover[0])
    ) {
      result.cover = cover[0].filename;
    }

    return result;
  }
}
