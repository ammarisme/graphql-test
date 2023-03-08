"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
let UserService = class UserService {
    constructor(dynamodb) {
        this.dynamodb = dynamodb;
    }
    async getallusers() {
        console.log('getallusers');
        const params = {
            TableName: 'users'
        };
        const data = await this.dynamodb.query(params, (err, data) => { }).promise();
        return data.Items;
    }
    async getuser(id) {
        console.log(id);
        const params = {
            TableName: 'users',
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': id,
            }
        };
        const data = await this.dynamodb.query(params, (err, data) => { }).promise();
        return data.Items;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(aws_sdk_1.DynamoDB)),
    __metadata("design:paramtypes", [aws_sdk_1.DynamoDB])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map