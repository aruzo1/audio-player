import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrackDTO } from './dto/create-track.dto';
import { Track } from './track.entity';

@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(Track) private tracksRepository: Repository<Track>,
  ) {}

  findAll() {
    return this.tracksRepository.find();
  }

  findOne(id: number) {
    return this.tracksRepository.findOneBy({ id });
  }

  async findPrevOrNext(id: number, next?: boolean) {
    const track = await this.tracksRepository.findOneBy({ id });
    if (!track) return null;

    return this.tracksRepository
      .createQueryBuilder('track')
      .where(`track.createdAt ${next ? '>' : '<'} :createdAt`, {
        createdAt: track.createdAt,
      })
      .orderBy('track.createdAt', next ? 'ASC' : 'DESC')
      .getOne();
  }

  create(
    createTrackDTO: CreateTrackDTO,
    trackFilename: string,
    coverFilename: string,
  ) {
    const track = this.tracksRepository.create({
      ...createTrackDTO,
      trackFilename,
      coverFilename,
    });

    return this.tracksRepository.save(track);
  }
}
