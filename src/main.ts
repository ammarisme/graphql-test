import { NestFactory } from '@nestjs/core';
//import { AppModule } from './app.module';
import { DynamoDBModule } from './dynamodb.module';

async function bootstrap() {
  const app = await NestFactory.create(DynamoDBModule);
  await app.listen(3000);
}
bootstrap();
