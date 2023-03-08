
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BooksResolver } from './book.resolver';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, BooksResolver, UserResolver],
})
export class AppModule {}