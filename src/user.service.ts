import { Injectable, Inject } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';

@Injectable()
export class UserService {
  constructor(@Inject(DynamoDB) private readonly dynamodb: DynamoDB) {}

  async getusers(): Promise<any[]> {
    const params = {
      TableName: 'users', // Replace with your DynamoDB table name
    };

    const data = await this.dynamodb.scan(params).promise();

    return data.Items;
  }
}
