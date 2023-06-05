import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SponsorsEntity } from './sponsors.entity';
import { Repository } from 'typeorm';
import { UpdateSponsorsDto } from './dto/update-sponsors.dto';

@Injectable()
export class SponsorsService {
  constructor(
    @InjectRepository(SponsorsEntity)
    private readonly sponsorsRepository: Repository<SponsorsEntity>,
  ) {}

  async findAll() {
    return this.sponsorsRepository.find();
  }

  async findOne(id: string): Promise<SponsorsEntity[]> {
    const sponsors = await this.sponsorsRepository.find({ where: { id } });
    if (!sponsors) {
      throw new HttpException(`Sponsor ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return sponsors;
  }

  async findByName(sponsorName: string): Promise<SponsorsEntity[]> {
    const sponsors = await this.sponsorsRepository.find({
      where: { sponsorName },
    });
    if (!sponsors) {
      throw new HttpException(
        `Sponsor ${sponsorName} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return sponsors;
  }

  async findbyName(sponsorName: string): Promise<SponsorsEntity[]> {
    const sponsors = await this.sponsorsRepository.find({
      where: { sponsorName },
    });
    if (!sponsors) {
      throw new HttpException(
        `Sponsor ${sponsorName} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return sponsors;
  }

  create() {
    const sponsors = this.sponsorsRepository.create();
    return this.sponsorsRepository.save(sponsors);
  }

  async update(id: string, updateSponsors: UpdateSponsorsDto) {
    const sponsors = await this.sponsorsRepository.preload({
      id,
      ...updateSponsors,
    });

    if (!sponsors) {
      throw new NotFoundException(`Sponsor ${id} not found`);
    }
    return this.sponsorsRepository.save(sponsors);
  }

  async remove(id: string) {
    const sponsors = await this.sponsorsRepository.findOne({ where: { id } });

    if (!sponsors) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return this.sponsorsRepository.remove(sponsors);
  }
}
