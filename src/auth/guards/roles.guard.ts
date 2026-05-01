import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';

@Injectable()
// Guarda de autorizacao baseada em roles
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  // Metodo que verifica se o usuario tem a role necessaria para acessar o recurso
  canActivate(context: ExecutionContext): boolean {
    // Obtém as roles requeridas a partir dos metadados definidos pelo decorator @Roles()
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    // Se nao houver roles requeridas, permite o acesso
    if (!requiredRoles) {
      return true; 
    }
    // Obtém o usuário a partir do request
    const { user } = context.switchToHttp().getRequest();
    // Verifica se o usuário possui uma das roles requeridas
    if (!user || !requiredRoles.includes(user.role)) {
      throw new ForbiddenException('Acesso restrito a ADMIN');
    }
    // Se o usuário possui a role necessária, permite o acesso
    return true;
  }
}