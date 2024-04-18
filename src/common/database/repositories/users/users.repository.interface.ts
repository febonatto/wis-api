import { User } from 'src/modules/users/entity/user.entity';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';

export interface UsersRepositoryInterface {
  create(createUserDto: CreateUserDto): Promise<User>;
}
