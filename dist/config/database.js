"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRedis = exports.redis = exports.disconnectDB = exports.connectDb = exports.prisma = void 0;
const client_1 = require("@prisma/client");
const redis_1 = require("redis");
function connectDb() {
    exports.prisma = new client_1.PrismaClient();
}
exports.connectDb = connectDb;
async function disconnectDB() {
    await exports.prisma?.$disconnect();
}
exports.disconnectDB = disconnectDB;
exports.redis = (0, redis_1.createClient)({
    url: process.env.REDIS_URL
});
async function connectRedis() {
    await exports.redis.connect();
}
exports.connectRedis = connectRedis;
