import { Injectable, Inject } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import AWS, { DynamoDB } from 'aws-sdk';
import { PutItemInput } from 'aws-sdk/clients/dynamodb';
import { randomUUID } from 'crypto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@Inject(DynamoDB) private readonly dynamodb: DynamoDB) {}

  async getusers(): Promise<any[]> {
    const params = {
      TableName: 'users', // Replace with your DynamoDB table name
    };

    const data = await this.dynamodb.scan(params).promise();

    console.log('result sdsdsdsdsd')

    return data.Items;
  }

  async finduser(id): Promise<any> {

    const params = {
      TableName: 'users',
      Key: {
        id: {
          S: id,
        },
      },

    };
    const data = await this.dynamodb.getItem(params).promise();

    return {
      id : data.Item.id.S,
      name: data.Item.name.S
    }
  }

  async createuser(name: string): Promise<any> {
    const user = {
      id: { S: randomUUID() },
      name: { S: name },
    }
    const params :PutItemInput = {
      TableName: 'users', // Replace with your table name
      Item: user,
    };

    try {
      const result =await this.dynamodb.putItem(params).promise();
      return   {
          id: user.id.S,
          name: user.name.S
        };
    } catch (error) {
      throw new Error(`Failed to create user: ${error}`);
    }
  }

  // updateuser method to update dynamodb using dynamodb.updateItem() method
  async updateuser(id: string, name: string): Promise<any> {
    const params = {
      TableName: 'users', // Replace with your table name
      Key: {
        id: {
          S: id,
        },
      },
      UpdateExpression: 'set #name = :name',
      ExpressionAttributeNames: {
        '#name': 'name',
      },
      ExpressionAttributeValues: {
        ':name': { S: name },
      },
      ReturnValues: 'UPDATED_NEW',
    };

    try {
      const result = await this.dynamodb.updateItem(params).promise();
      return {
        id: id,
        name: name,
      };
    } catch (error) {
      throw new Error(`Failed to update user: ${error}`);
    }
  }

  }
