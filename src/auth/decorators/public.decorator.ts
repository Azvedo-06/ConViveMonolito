import { SetMetadata } from '@nestjs/common';
// Decorador de metadados para marcar rotas como públicas
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
// setMetadata é uma função do NestJS que permite definir metadados personalizados para classes ou métodos.