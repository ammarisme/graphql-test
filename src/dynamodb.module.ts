import * as AWS from 'aws-sdk';
//dynamodb.module.ts
import { Module } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { UserService } from './user.service';
//import { UserResolver } from './user.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { UserResolver } from './user.resolver';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [UserService, UserResolver, {// UserResolver,
    provide: DynamoDB,
    useFactory: () => {
      return new AWS.DynamoDB({
        region: 'us-east-2', // Replace with your AWS region
        accessKeyId: 'AKIA5ABXD3YY4M4GUGWM',
        secretAccessKey: 'AqXIRbkHmHSEuUIWWa/Z9VbgPOeA1bQ9lv3SffsE'
      });
    },
  }],
})
export class DynamoDBModule {}



// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
// import * as AWS from 'aws-sdk';
// import { DynamoDB } from 'aws-sdk';
// import { UserResolver } from './user.resolver';
// import { UserService } from './user.service';
// //import { AppService } from './app.service';

// @Module({
//     imports: [
//         GraphQLModule.forRoot<ApolloDriverConfig>({
//           driver: ApolloDriver,
//           playground: true,
//           autoSchemaFile: true,
//         }),
//       ],
//   providers: [
// //    AppService,
//     {
//       provide: DynamoDB,
//       useFactory: () => {
//         return new AWS.DynamoDB({
//           region: 'us-west-2', // Replace with your AWS region
//           accessKeyId: 'AKIA5ABXD3YY4M4GUGWM',
//           secretAccessKey: 'AqXIRbkHmHSEuUIWWa/Z9VbgPOeA1bQ9lv3SffsE'
//         });
//       },
//     },
//   ],
//   exports: [//AppService
// ],
// })
// export class DynamoDBModule {}


// // 