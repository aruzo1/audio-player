import { Controller, Body, Post, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDTO } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Post()
  create(@Body() createCategoryDTO: CreateCategoryDTO) {
    return this.categoriesService.create(createCategoryDTO);
  }
}
