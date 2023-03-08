"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDBModule = void 0;
const AWS = require("aws-sdk");
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
const user_service_1 = require("./user.service");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const app_controller_1 = require("./app.controller");
const user_resolver_1 = require("./user.resolver");
let DynamoDBModule = class DynamoDBModule {
};
DynamoDBModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: true,
                autoSchemaFile: true,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [user_service_1.UserService, user_resolver_1.UserResolver, {
                provide: aws_sdk_1.DynamoDB,
                useFactory: () => {
                    return new AWS.DynamoDB({
                        region: 'us-east-2',
                        accessKeyId: 'AKIA5ABXD3YY4M4GUGWM',
                        secretAccessKey: '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'
                    });
                },
            }],
    })
], DynamoDBModule);
exports.DynamoDBModule = DynamoDBModule;
//# sourceMappingURL=dynamodb.module.js.map