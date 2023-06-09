import { prisma } from "@/config";
import { Habit } from "@prisma/client";

async function createHabit(
  name: string,
  userId: number,
  days: number[]
): Promise<Habit> {
  return prisma.habit.create({
    data: {
      name,
      user: { connect: { id: userId } },
      days: { set: days.map(Number) },
    },
  });
}

async function getHabitsByUserId(userId: number) {
  return prisma.habit.findMany({
    where: { userId },
    select: {
      id: true,
      name: true,
      days: true,
    },
  });
}

async function getHabitById(habitId: number): Promise<Habit | null> {
  return prisma.habit.findUnique({
    where: { id: habitId },
  });
}

async function updateHabit(
  habitId: number,
  data: Partial<Habit>
): Promise<Habit> {
  return prisma.habit.update({
    where: { id: habitId },
    data,
  });
}

async function deleteHabit(habitId: number): Promise<void> {
  await prisma.habit.delete({
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

export default habitRepositorie;
