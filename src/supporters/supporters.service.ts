import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupportersEntity } from './supporters.entity';
import { UpdateSupportersDto } from './dto/update-supporters.dto';

@Injectable()
export class SupportersService {
  constructor(
    @InjectRepository(SupportersEntity)
    private readonly supportersRepository: Repository<SupportersEntity>,
  ) {}

  async findAll() {
    return this.supportersRepository.find();
  }

  async findOne(id: string): Promise<SupportersEntity[]> {
    const supporters = await this.supportersRepository.find({ where: { id } });
    if (!supporters) {
      throw new HttpException(`Sponsor ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return supporters;
  }

  async findByName(supportersName: string): Promise<SupportersEntity[]> {
    const supporters = await this.supportersRepository.find({
      where: { supportersName },
    });
    if (!supporters) {
      throw new HttpException(
        `Sponsor ${supportersName} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return supporters;
  }

  async findbyName(supportersName: string): Promise<SupportersEntity[]> {
    const supporters = await this.supportersRepository.find({
      where: { supportersName },
    });
    if (!supporters) {
      throw new HttpException(
        `Sponsor ${supportersName} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return supporters;
  }

  create() {
    const supporters = this.supportersRepository.create();
    return this.supportersRepository.save(supporters);
  }

  async update(id: string, updateSupporters: UpdateSupportersDto) {
    const supporters = await this.supportersRepository.preload({
      id,
      ...updateSupporters,
    });

    if (!supporters) {
      throw new NotFoundException(`Sponsor ${id} not found`);
    }
    return this.supportersRepository.save(supporters);
  }

  async remove(id: string) {
    const supporters = await this.supportersRepository.findOne({
      where: { id },
    });

    if (!supporters) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return this.supportersRepository.remove(supporters);
  }
}
