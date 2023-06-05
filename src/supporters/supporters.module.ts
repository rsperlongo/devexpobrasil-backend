import { Module } from '@nestjs/common';
import { SupportersService } from './supporters.service';
import { SupportersController } from './supporters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportersEntity } from './supporters.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SupportersEntity])],
  providers: [SupportersService],
  controllers: [SupportersController],
})
export class SupportersModule {}
