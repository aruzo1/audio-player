import { Exclude, Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Exclude()
  filename: string;

  @Column()
  title: string;

  @Expose()
  get url() {
    return '/api/media/' + this.filename;
  }
}
