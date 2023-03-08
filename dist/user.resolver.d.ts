import { User } from './entities/user.entity';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    users(): Promise<User[]>;
    finduser(id: string): Promise<any>;
    createUser(name: string): Promise<String>;
    updateUser(id: string, name: string): Promise<String>;
}
