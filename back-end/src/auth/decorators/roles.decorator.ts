import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums/role.enum';
// Decorador de metadados para definir os papéis necessários para acessar uma rota
export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);   
// Roles é um decorador que aceita uma lista de papéis e usa SetMetadata para associar esses papéis à rota ou controlador onde o decorador é aplicado.