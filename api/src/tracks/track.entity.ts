import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Exclude()
  trackFilename: string;

  @Expose()
  get trackUrl() {
    return '/api/media/' + this.trackFilename;
  }

  @Column()
  @Exclude()
  coverFilename: string;

  @Expose()
  get coverUrl() {
    return '/api/media/' + this.coverFilename;
  }

  @Column()
  title: string;

  @Column()
  author: string;

  @CreateDateColumn()
  createdAt: Date;
}
