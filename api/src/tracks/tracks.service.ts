import {
  FileTypeValidator,
  Injectable,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrackDTO } from './dto/create-track.dto';
import { FilterTrackDTO } from './dto/filter-track.dto';
import { UpdateTrackDTO } from './dto/update-track.dto';
import { Track } from './track.entity';

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(Track) private tracksRepository: Repository<Track>,
  ) {}

  findAll(props: FilterTrackDTO) {
    const { term, genreId, take = 6, sort, order = 'ASC' } = props;
    const query = this.tracksRepository.createQueryBuilder('track').take(take);

    if (sort) query.orderBy(sort && `"${sort}"`, order);
    if (genreId) query.where({ genreId });
    if (term) {
      query
        .innerJoin('track.genre', 'genre')
        .where(
          "to_tsvector(title || ' ' || author || ' ' || genre.name) @@ plainto_tsquery(:term || ':*')",
          { term },
        );
    }

    return query.getMany();
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
    data: UpdateTrackDTO,
    files: { track?: string; cover?: string },
  ) {
    const result = await this.tracksRepository
      .createQueryBuilder('track')
      .update(Track)
      .set({ ...data, ...files })
      .where({ id })
      .execute();

    return result.affected;
  }

  create(data: CreateTrackDTO, files: { track?: string; cover?: string }) {
    const track = this.tracksRepository.create({
      ...data,
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
      new MaxFileSizeValidator({ maxSize: 30000000 }).isValid(track[0]) &&
      new FileTypeValidator({ fileType: 'audio/mpeg' }).isValid(track[0])
    ) {
      result.track = track[0].filename;
    }
    if (
      cover &&
      new MaxFileSizeValidator({ maxSize: 10000000 }).isValid(cover[0]) &&
      new FileTypeValidator({ fileType: 'image/jpeg' }).isValid(cover[0])
    ) {
      result.cover = cover[0].filename;
    }

    return result;
  }
}
