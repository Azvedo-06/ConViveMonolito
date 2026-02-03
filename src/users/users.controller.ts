import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { toUserResponse } from './mappers/userMapper';
import { Public } from 'src/auth/decorators/public.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    // Endpoint to create a new user
    @Public()
    @Post()
    async createUser(@Body() dto: CreateUserDto) {
        const user = await this.usersService.create(dto);
        return toUserResponse(user);
    }
    // Endpoint to get the authenticated user's information
    @Get('me')
    async getMe(@Req() req) {
        const user = await this.usersService.findById(req.user.userId);
        return toUserResponse(user);
    } 
    // Endpoint to get all users (admin only)
    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    async getAllUsers() {
        const users = await this.usersService.findAll();
        return users.map(toUserResponse);
    }
}