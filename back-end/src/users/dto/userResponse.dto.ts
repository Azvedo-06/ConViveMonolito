import { Role } from 'src/auth/enums/role.enum';
// DTO para representar a resposta do usuário
export class UserResponseDto {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  email: string;
  role: Role;
  createdAt: Date;
}
