import { User } from './entities/user.entity';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    getallusers(): Promise<User[]>;
    getuser(id: any): Promise<User[]>;
}
