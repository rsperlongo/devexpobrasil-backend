import { Module } from '@nestjs/common';
import { SponsorsService } from './sponsors.service';
import { SponsorsController } from './sponsors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SponsorsEntity } from './sponsors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SponsorsEntity])],
  providers: [SponsorsService],
  controllers: [SponsorsController],
})
export class SponsorsModule {}
