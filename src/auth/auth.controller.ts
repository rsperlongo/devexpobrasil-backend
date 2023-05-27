import {
  Body,
  Controller,
  HttpCode,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import RegisterDto from './dto/register.dto';
import { LocalAuthenticationGuard } from './localauth.guard';
import JwtAuthenticationGuard from './jwt-authentication.guard';
import { LogInDto } from './dto/logIn.dto';
import { LoginStatus } from './interfaces/login-status.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authenticationService: AuthService) {}

  @Post('register')
  async register(@Body() registrationData: RegisterDto) {
    return this.authenticationService.register(registrationData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async logIn(@Body() loginUserDto: LogInDto): Promise<LoginStatus> {
    return await this.authenticationService.login(loginUserDto);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('log-out')
  async logOut(@Res() response: Response) {
    return response.sendStatus(200);
  }
}
