import { Controller, Body, Post, Get, Query } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDTO } from './dto/create-genre.dto';
import { FilterGenreDTO } from './dto/filter-genre.dto';

@Controller('genres')
export class GenresController {
  constructor(private categoriesService: GenresService) {}

  @Get()
  findAll(@Query() query: FilterGenreDTO) {
    return this.categoriesService.findAll(query);
  }

  @Post()
  create(@Body() createGenreDTO: CreateGenreDTO) {
    return this.categoriesService.create(createGenreDTO);
  }
}
