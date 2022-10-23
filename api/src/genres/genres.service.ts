import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './genre.entity';
import { CreateGenreDTO } from './dto/create-genre.dto';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre) private genresRepository: Repository<Genre>,
  ) {}

  findAll({ take = 10, skip = 0 }: { take?: number; skip?: number }) {
    return this.genresRepository.find({ take, skip });
  }

  create(createGenreDTO: CreateGenreDTO) {
    const category = this.genresRepository.create(createGenreDTO);

    return this.genresRepository.save(category);
  }
}
