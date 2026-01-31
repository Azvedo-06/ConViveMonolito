import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { Role } from '../auth/enums/role.enum';
import { User } from './entity/user.model';
import { InjectModel } from '@nestjs/sequelize';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {} 
     
  async create(dto: CreateUserDto) {
    const passwordHash = await bcrypt.hash(dto.password, 10);

    return this.userModel.create({
      name: dto.name,
      cpf: dto.cpf,
      phone: dto.phone,
      email: dto.email,
      password: passwordHash,
      role: Role.USER,
    });
  }
}
