import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role } from './enums/role.enum';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    // POR ENQUANTO mockado
    const user = {
      id: 1,
      role: Role.ADMIN, // depois vem do banco 
    };
    return this.authService.login(user);
  }
}
