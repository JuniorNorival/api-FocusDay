"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersPost = void 0;
const index_1 = __importDefault(require("../../service/user-service/index"));
const http_status_1 = __importDefault(require("http-status"));
async function usersPost(req, res) {
    const { name, email, password } = req.body;
    try {
        const user = await index_1.default.createUser({ name, email, password });
        return res.status(http_status_1.default.CREATED).json({
            id: user.id,
            email: user.email,
        });
    }
    catch (error) {
        if (error.name === "DuplicatedEmailError") {
            return res.status(http_status_1.default.CONFLICT).send(error);
        }
        return res.status(http_status_1.default.BAD_REQUEST).send(error);
    }
}
exports.usersPost = usersPost;
