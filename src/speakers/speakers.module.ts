import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpeakersEntity } from './speakers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpeakersEntity])],
})
export class SpeakersModule {}
