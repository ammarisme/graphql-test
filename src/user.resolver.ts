import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { DynamoDB } from 'aws-sdk';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {

  //constructor(private readonly dynamodb: DynamoDB) {}

  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = await this.userService.getusers();

    return users.map((user) => ({
      id: user.id.S,
      name: user.name.S,
    }));
    
  }
  

  @Query(() => User)
  async finduser(@Args('id') id: string) : Promise<any>{
    const user = await this.userService.finduser(id);
    return user
  }

  @Mutation(returns => User)
  async createUser(@Args('name') name: string): Promise<String> {
    const user = await this.userService.createuser(name);
    return user;
  }

  //Mutation to update user
  @Mutation(returns => User)
  async updateUser(@Args('id') id: string, @Args('name') name: string): Promise<String> {
    const user = await this.userService.updateuser(id, name);
    return user;
  }
}
