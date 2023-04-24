"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHabit = exports.updateHabit = exports.findHabitByUserId = exports.createHabit = void 0;
const habits_repositorie_1 = __importDefault(require("../../repositories/habits-repositorie/index"));
async function createHabit(habitData) {
    const { name, userId, days } = habitData;
    return habits_repositorie_1.default.createHabit(name, userId, days);
}
exports.createHabit = createHabit;
async function findHabitByUserId(userId) {
    return habits_repositorie_1.default.getHabitsByUserId(userId);
}
exports.findHabitByUserId = findHabitByUserId;
async function updateHabit(habitId, habitData) {
    return habits_repositorie_1.default.updateHabit(habitId, habitData);
}
exports.updateHabit = updateHabit;
async function deleteHabit(habitId) {
    return habits_repositorie_1.default.deleteHabit(habitId);
}
exports.deleteHabit = deleteHabit;
const habitService = {
    createHabit,
    findHabitByUserId,
    updateHabit,
    deleteHabit,
};
exports.default = habitService;
