import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';
import { Track } from './track.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([Track]),
    MulterModule.register({ dest: 'media' }),
  ],
  controllers: [TracksController],
  providers: [TracksService],
})
export class TracksModule {}
