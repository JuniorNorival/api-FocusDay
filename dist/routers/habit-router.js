"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.habitRouter = void 0;
const express_1 = require("express");
const habit_controller_1 = __importDefault(require("../controllers/habit-controller/index"));
const habitRouter = (0, express_1.Router)();
exports.habitRouter = habitRouter;
habitRouter.post("/habits", habit_controller_1.default.createHabit);
habitRouter.get("/users/:userId/habits", habit_controller_1.default.findHabitByUserId);
habitRouter.patch("/habits/:id", habit_controller_1.default.updateHabit);
habitRouter.delete("/habits/:id", habit_controller_1.default.deleteHabit);
