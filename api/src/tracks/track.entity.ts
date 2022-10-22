import { Exclude, Expose } from 'class-transformer';
import { Category } from 'src/categories/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Exclude()
  track: string;

  @Expose()
  get trackUrl() {
    return '/api/media/' + this.track;
  }

  @Column()
  @Exclude()
  cover: string;

  @Expose()
  get coverUrl() {
    return '/api/media/' + this.cover;
  }

  @Column()
  title: string;

  @Column()
  author: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(() => Category, { cascade: true })
  @JoinTable()
  categories: Category[];
}
