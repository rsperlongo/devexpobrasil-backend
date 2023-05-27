import { UserDto } from '../user/dto/user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { LogInDto } from 'src/auth/dto/logIn.dto';
import { comparePasswords } from 'src/shared/utils';
import { toUserDto } from 'src/shared/mapper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = new User();

    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;

    return await this.usersRepository.save(newUser);
  }

  async getById(id: string) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async create(userData: CreateUserDto) {
    const newUser = await this.usersRepository.create(userData);
    return await this.usersRepository.save(newUser);
  }

  async findByLogin({ email, password }: LogInDto): Promise<UserDto> {
    const user = await this.usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await comparePasswords(user.password, password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(user);
  }

  async findByPayload({ email }: any): Promise<UserDto> {
    return await this.usersRepository.findOne({ where: { email } });
  }
}
