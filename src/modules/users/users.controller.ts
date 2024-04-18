import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersServiceInterface } from './users.service.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersServiceInterface) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
