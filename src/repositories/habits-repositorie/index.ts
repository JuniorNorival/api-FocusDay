import { PrismaClient } from "@prisma/client";
import { Habit } from "@prisma/client";
const prisma = new PrismaClient();

export async function createHabit(
  name: string,
  userId: number,
  days: number[]
): Promise<Habit> {
  return prisma.habit.create({
    data: {
      name,
      user: { connect: { id: userId } },
      days: { set: days.map(String) },
    },
  });
}

export async function getHabitsByUserId(userId: number): Promise<Habit[]> {
  return prisma.habit.findMany({
    where: { userId },
  });
}

export async function getHabitById(habitId: number): Promise<Habit | null> {
  return prisma.habit.findUnique({
    where: { id: habitId },
  });
}

export async function updateHabit(
  habitId: number,
  data: Partial<Habit>
): Promise<Habit> {
  return prisma.habit.update({
    where: { id: habitId },
    data,
  });
}

export async function deleteHabit(habitId: number): Promise<void> {
  await prisma.habit.delete({
    where: { id: habitId },
  });
}
