import { Injectable, Inject } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';

@Injectable()
export class UserService {
  constructor(@Inject(DynamoDB) private readonly dynamodb: DynamoDB) {}

  async getallusers(): Promise<any[]> {
    console.log('getallusers')
    const params = {
      TableName: 'users'
    };

    const data = await this.dynamodb.query(params, (err, data) => {}).promise();

    return data.Items;
  }

  async getuser(id): Promise<any[]> {
    console.log(id)
    const params = {
      TableName: 'users',
      KeyConditionExpression: 'id = :id',
      ExpressionAttributeValues: {
        ':id': id,
      }
    };

    const data = await this.dynamodb.query(params, (err, data) => {}).promise();

    return data.Items;
  }
}
