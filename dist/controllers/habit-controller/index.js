"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHabit = exports.updateHabit = exports.findHabitByUserId = exports.createHabit = void 0;
const habit_service_1 = __importDefault(require("../../service/habit-service/index"));
const http_status_1 = __importDefault(require("http-status"));
async function createHabit(req, res) {
    try {
        const habitData = req.body;
        const habit = await habit_service_1.default.createHabit(habitData);
        res.status(http_status_1.default.CREATED).json(habit);
    }
    catch (error) {
        console.error(error);
        res
            .status(http_status_1.default.INTERNAL_SERVER_ERROR)
            .json({ message: "Internal server error" });
    }
}
exports.createHabit = createHabit;
async function findHabitByUserId(req, res) {
    try {
        const userId = Number(req.params.userId);
        const habits = await habit_service_1.default.findHabitByUserId(userId);
        res.json(habits);
    }
    catch (error) {
        console.error(error);
        res
            .status(http_status_1.default.INTERNAL_SERVER_ERROR)
            .json({ message: "Internal server error" });
    }
}
exports.findHabitByUserId = findHabitByUserId;
async function updateHabit(req, res) {
    try {
        const habitId = Number(req.params.habitId);
        const habitData = req.body;
        const habit = await habit_service_1.default.updateHabit(habitId, habitData);
        res.json(habit);
    }
    catch (error) {
        console.error(error);
        res
            .status(http_status_1.default.INTERNAL_SERVER_ERROR)
            .json({ message: "Internal server error" });
    }
}
exports.updateHabit = updateHabit;
async function deleteHabit(req, res) {
    try {
        const habitId = Number(req.params.habitId);
        await habit_service_1.default.deleteHabit(habitId);
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res
            .status(http_status_1.default.INTERNAL_SERVER_ERROR)
            .json({ message: "Internal server error" });
    }
}
exports.deleteHabit = deleteHabit;
const habitController = {
    deleteHabit,
    updateHabit,
    findHabitByUserId,
    createHabit,
};
exports.default = habitController;
