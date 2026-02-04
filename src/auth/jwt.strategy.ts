import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
// Estrategia JWT para validação de tokens
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      // Extrai o token JWT do cabeçalho Authorization como Bearer Token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Define a chave secreta para validar o token 
      secretOrKey: config.get('JWT_SECRET'),
    });
  }
  // Valida o payload do token JWT
  async validate(payload: any) {
    return {
      userId: payload.sub,
      role: payload.role,
    };
  }
}