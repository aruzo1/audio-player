import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './genre.entity';
import { CreateGenreDTO } from './dto/create-genre.dto';
import { FilterGenreDTO } from './dto/filter-genre.dto';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre) private genresRepository: Repository<Genre>,
  ) {}

  findAll({ take }: FilterGenreDTO) {
    return this.genresRepository.find({ take });
  }

  create(data: CreateGenreDTO) {
    const category = this.genresRepository.create(data);

    return this.genresRepository.save(category);
  }
}
