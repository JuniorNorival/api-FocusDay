"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_repositorie_1 = __importDefault(require("../../repositories/user-repositorie/index"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const errors_1 = require("../../errors/index");
async function createUser({ name, email, password, }) {
    await validateUniqueEmailOrFail(email);
    const hashedPassword = await bcrypt_1.default.hash(password, 12);
    return user_repositorie_1.default.create({ name, email, password: hashedPassword });
}
exports.createUser = createUser;
async function validateUniqueEmailOrFail(email) {
    const userWithSameEmail = await user_repositorie_1.default.findByEmail(email);
    if (userWithSameEmail) {
        throw (0, errors_1.duplicatedEmailError)();
    }
}
const userService = {
    createUser,
};
exports.default = userService;
