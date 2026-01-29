import { Table, Column, Model, DataType } from 'sequelize-typescript';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

@Table({
  tableName: 'users',
  timestamps: true,
  underscored: true,
})
export class User extends Model<User> {
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  cpf: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  phone: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM('ADMIN', 'USER'),
    defaultValue: Role.USER,
  })
  role: Role;
}
