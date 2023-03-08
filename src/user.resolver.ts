import { Resolver, Query } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => [User])
  async getallusers(): Promise<User[]> {
    console.log('getallusers')
    const users = await this.userService.getallusers();

    return users.map((user) => ({
      id: user.id.S,
      name: user.name.S,
    }));
  }

  @Query((id) => [User])
  async getuser(id: any): Promise<User[]> {
    console.log(id)
    const users = await this.userService.getuser(id);

    return users.map((user) => ({
      id: user.id.S,
      name: user.name.S,
    }));
  }
}
