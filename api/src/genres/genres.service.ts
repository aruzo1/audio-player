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

  findAll() {
    return this.genresRepository.find();
  }

  create(createGenreDTO: CreateGenreDTO) {
    const category = this.genresRepository.create(createGenreDTO);

    return this.genresRepository.save(category);
  }
}
