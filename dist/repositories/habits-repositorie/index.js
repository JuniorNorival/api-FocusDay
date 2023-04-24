"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config/index");
async function createHabit(name, userId, days) {
    return config_1.prisma.habit.create({
        data: {
            name,
            user: { connect: { id: userId } },
            days: { set: days.map(Number) },
        },
    });
}
async function getHabitsByUserId(userId) {
    return config_1.prisma.habit.findMany({
        where: { userId },
        select: {
            id: true,
            name: true,
            days: true,
        },
    });
}
async function getHabitById(habitId) {
    return config_1.prisma.habit.findUnique({
        where: { id: habitId },
    });
}
async function updateHabit(habitId, data) {
    return config_1.prisma.habit.update({
        where: { id: habitId },
        data,
    });
}
async function deleteHabit(habitId) {
    await config_1.prisma.habit.delete({
        where: { id: habitId },
    });
}
const habitRepositorie = {
    deleteHabit,
    updateHabit,
    getHabitById,
    getHabitsByUserId,
    createHabit,
};
exports.default = habitRepositorie;
