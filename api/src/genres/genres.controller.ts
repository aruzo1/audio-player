import { Controller, Body, Post, Get } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDTO } from './dto/create-genre.dto';

@Controller('genres')
export class GenresController {
  constructor(private categoriesService: GenresService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Post()
  create(@Body() createGenreDTO: CreateGenreDTO) {
    return this.categoriesService.create(createGenreDTO);
  }
}
