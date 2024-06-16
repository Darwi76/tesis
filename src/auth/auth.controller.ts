import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request as HttpRequest } from 'express';
import { AuthService } from './providers/auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { AuthGuard } from './guard/auth.guard';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body()dto:LoginDto) {
    return this.authService.login(dto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async hola(){
    return 'Hola mundo'
  }
}
