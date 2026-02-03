import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
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

  async findById(id: number): Promise<User> {
    const user = await this.userModel.findByPk(id);
     if (!user) {
      throw new Error('Usuário não encontrado');
     }
     return user;
  }

  async findAll() {
    return await this.userModel.findAll();
  }
}
