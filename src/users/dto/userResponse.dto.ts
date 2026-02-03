import { Role } from 'src/auth/enums/role.enum';

export class UserResponseDto {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  email: string;
  role: Role;
  createdAt: Date;
}
