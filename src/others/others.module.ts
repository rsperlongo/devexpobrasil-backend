import { Module } from '@nestjs/common';
import { OthersService } from './others.service';
import { OthersController } from './others.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OthersEntity } from './others.entity';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [EventsModule, TypeOrmModule.forFeature([OthersEntity])],
  providers: [OthersService],
  controllers: [OthersController],
})
export class OthersModule {}
