import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entity/user.model';
import sequelize from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  exports: [SequelizeModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
