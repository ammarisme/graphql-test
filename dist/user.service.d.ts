import { DynamoDB } from 'aws-sdk';
export declare class UserService {
    private readonly dynamodb;
    constructor(dynamodb: DynamoDB);
    getusers(): Promise<any[]>;
    finduser(id: any): Promise<any>;
    createuser(name: string): Promise<any>;
}
