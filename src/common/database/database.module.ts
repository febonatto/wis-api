import { Global, Module } from '@nestjs/common';
import { DatabasePrismaService } from './database.prisma.service';
import { UsersPrismaRepository } from './repositories/users/users-prisma.repository';

@Global()
@Module({
  providers: [DatabasePrismaService, UsersPrismaRepository],
  exports: [UsersPrismaRepository],
})
export class DatabaseModule {}
