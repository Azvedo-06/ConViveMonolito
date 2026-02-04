import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { Reflector } from '@nestjs/core';
@Injectable()
// JwtAuthGuard é uma guarda de autenticação que utiliza JWT para proteger rotas
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super(); // Chama o construtor da classe pai AuthGuard
  }
  // canActivate verifica se a rota é pública ou se o usuário está autenticado
  canActivate(context: ExecutionContext) {
    // Verifica se a rota tem o decorator @Public()
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    // Se a rota for pública, permite o acesso sem autenticação
    if (isPublic) {
      return true; 
    }
    // Caso contrário, chama o método canActivate da classe pai para verificar a autenticação
    return super.canActivate(context);
  }
}
