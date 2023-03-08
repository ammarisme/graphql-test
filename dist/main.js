"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const dynamodb_module_1 = require("./dynamodb.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(dynamodb_module_1.DynamoDBModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map