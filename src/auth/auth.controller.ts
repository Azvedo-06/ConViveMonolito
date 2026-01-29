import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role } from './enums/role.enum';
import { LoginDto } from './dto/login.dto';
import e from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    const { email, password } = body;
    return this.authService.login(email, password);
  }
}
