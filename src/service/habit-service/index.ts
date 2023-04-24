import habitRepository from "../../repositories/habits-repositorie";
import { Habit } from "@prisma/client";

export async function createHabit(
  habitData: CreateHabitParams
): Promise<Habit> {
  const { name, userId, days } = habitData;
  return habitRepository.createHabit(name, userId, days);
}

export async function findHabitByUserId(userId: number) {
  return habitRepository.getHabitsByUserId(userId);
}

export async function updateHabit(
  habitId: number,
  habitData: UpdateHabitParams
): Promise<Habit> {
  return habitRepository.updateHabit(habitId, habitData);
}

export async function deleteHabit(habitId: number): Promise<void> {
  return habitRepository.deleteHabit(habitId);
}

export type CreateHabitParams = {
  name: string;
  userId: number;
  days: number[];
  done?: boolean;
  currentSequence?: number;
  highestSequence?: number;
};

export type UpdateHabitParams = Partial<CreateHabitParams>;

const habitService = {
  createHabit,
  findHabitByUserId,
  updateHabit,
  deleteHabit,
};

export default habitService;
