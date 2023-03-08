import { UserService } from './user.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: UserService);
    getusers(): Promise<any>;
    getuser(id: any): Promise<any>;
    createuser(name: string): Promise<string>;
}
