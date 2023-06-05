import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OthersEntity } from './others.entity';
import { Repository } from 'typeorm';
import { UpdateOthersDto } from './dto/update-others.dto';

@Injectable()
export class OthersService {
  constructor(
    @InjectRepository(OthersEntity)
    private readonly othersRepository: Repository<OthersEntity>,
  ) {}

  async findAll() {
    return this.othersRepository.find();
  }

  async findOne(id: string): Promise<OthersEntity[]> {
    const others = await this.othersRepository.find({ where: { id } });
    if (!others) {
      throw new HttpException(`Product ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return others;
  }

  async findbyName(exhibitorsName: string): Promise<OthersEntity[]> {
    const others = await this.othersRepository.find({
      where: { exhibitorsName },
    });
    if (!others) {
      throw new HttpException(
        `Product ${exhibitorsName} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return others;
  }

  create() {
    const others = this.othersRepository.create();
    return this.othersRepository.save(others);
  }

  async update(id: string, updateOthers: UpdateOthersDto) {
    const others = await this.othersRepository.preload({
      id,
      ...updateOthers,
    });

    if (!others) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return this.othersRepository.save(others);
  }

  async remove(id: string) {
    const others = await this.othersRepository.findOne({ where: { id } });

    if (!others) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return this.othersRepository.remove(others);
  }
}
