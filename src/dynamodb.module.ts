import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import * as AWS from 'aws-sdk';
import { DynamoDB } from 'aws-sdk';
import { AppService } from './app.service';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: true,
          playground: true,
        }),
      ],
  providers: [
    AppService,
    {
      provide: DynamoDB,
      useFactory: () => {
        return new AWS.DynamoDB({
          region: 'us-west-2', // Replace with your AWS region
          accessKeyId: 'AKIA5ABXD3YY4M4GUGWM',
          secretAccessKey: 'AqXIRbkHmHSEuUIWWa/Z9VbgPOeA1bQ9lv3SffsE'
        });
      },
    },
  ],
  exports: [AppService, DynamoDB],
})
export class DynamoDBModule {}
