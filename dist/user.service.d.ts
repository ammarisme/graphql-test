import { DynamoDB } from 'aws-sdk';
export declare class UserService {
    private readonly dynamodb;
    constructor(dynamodb: DynamoDB);
    getUsers(): Promise<any[]>;
}
