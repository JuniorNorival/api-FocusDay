"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config/index");
async function create(data) {
    return config_1.prisma.user.create({
        data,
    });
}
async function findByEmail(email) {
    const params = {
        where: {
            email,
        },
    };
    return config_1.prisma.user.findUnique(params);
}
const userRepository = {
    findByEmail,
    create,
};
exports.default = userRepository;
