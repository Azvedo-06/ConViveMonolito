import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Role } from '../../auth/enums/role.enum';

export interface UserAttributes {
  id: number;
  name: string;
  cpf: string;
  phone: string;
  email: string;
  password: string;
  role: Role;
}

export interface UserCreationAttributes
  extends Omit<UserAttributes, 'id'> {}

@Table({
  tableName: 'users',
  timestamps: true,
  underscored: true,
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare cpf: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.ENUM('ADMIN', 'USER'),
    defaultValue: Role.USER,
  })
  declare role: Role;
}
