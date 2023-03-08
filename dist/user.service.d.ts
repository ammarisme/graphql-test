import { DynamoDB } from 'aws-sdk';
export declare class UserService {
    private readonly dynamodb;
    constructor(dynamodb: DynamoDB);
    getallusers(): Promise<any[]>;
    getuser(id: any): Promise<any[]>;
}
