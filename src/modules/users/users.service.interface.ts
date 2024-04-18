import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

export interface UsersServiceInterface {
  create(createUserDto: CreateUserDto): Promise<User>;
}
