import { UserService } from './user.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: UserService);
    getallusers(): string;
    getuser(id: string): Promise<any>;
}
