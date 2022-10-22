import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDTO } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  findAll() {
    return this.categoriesRepository.find();
  }

  create(createCategoryDTO: CreateCategoryDTO) {
    const category = this.categoriesRepository.create(createCategoryDTO);

    return this.categoriesRepository.save(category);
  }
}
