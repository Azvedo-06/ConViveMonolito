import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    // POR ENQUANTO mockado
    const user = {
      id: 1,
      role: 'ADMIN', // depois vem do banco 
    };
    return this.authService.login(user);
  }
}
