import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LogInDto } from './dto/logIn.dto';
import { LoginStatus } from './interfaces/login-status.interface';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { RegistrationStatus } from './interfaces/registration-status.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authenticationService: AuthService) {}

  @Post('register')
  public async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus =
      await this.authenticationService.register(createUserDto);

    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }

    return result;
  }

  @Post('login')
  async logIn(@Body() loginUserDto: LogInDto): Promise<LoginStatus> {
    return await this.authenticationService.login(loginUserDto);
  }

  @Post('log-out')
  async logOut(@Res() response: Response) {
    return response.sendStatus(200);
  }
}
