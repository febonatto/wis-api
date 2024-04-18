import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { UsersRepositoryInterface } from './users.repository.interface';
import { DatabasePrismaService } from '../../database.prisma.service';
import { User } from 'src/modules/users/entity/user.entity';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';

@Injectable()
export class UsersPrismaRepository implements UsersRepositoryInterface {
  constructor(private readonly databasePrismaService: DatabasePrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const userPrisma = await this.databasePrismaService.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
      },
    });

    const user = plainToClass(User, userPrisma);

    return user;
  }
}
