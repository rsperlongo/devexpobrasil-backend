import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { RegistrationStatus } from './interfaces/registration-status.interface';
import { LoginStatus } from './interfaces/login-status.interface';
import { UserDto } from 'src/user/dto/user.dto';
import { JwtPayload } from './interfaces/payload.interfaces';
import { LoginUserDto } from 'src/user/dto/user-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };
    try {
      await this.usersService.create(userDto);
    } catch (error) {
      status = {
        success: false,
        message: error,
      };
    }
    return status;
  }

  async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    // find user in db
    const user = await this.usersService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this._createToken(user);

    return {
      email: user.email,
      ...token,
    };
  }

  async validateUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken({ email }: UserDto): any {
    const expiresIn = process.env.EXPIRESIN;

    const user: JwtPayload = { email };
    const accessToken = this.jwtService.sign(user, {
      secret: process.env.JWT_SECRET,
      expiresIn: '60h',
    });
    console.log(accessToken);
    return {
      expiresIn,
      accessToken,
    };
  }
}
