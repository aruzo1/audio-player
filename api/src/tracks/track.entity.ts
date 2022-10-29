import { Exclude, Expose } from 'class-transformer';
import { Genre } from 'src/genres/genre.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  genreId: number;

  @Column()
  @Exclude()
  track: string;

  @Column()
  @Exclude()
  cover: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Genre, (genre) => genre.tracks)
  @JoinColumn()
  genre: Genre;

  @Expose()
  get trackUrl() {
    return `/api/media/${this.track}`;
  }

  @Expose()
  get coverUrl() {
    return `/api/media/${this.cover}`;
  }
}
