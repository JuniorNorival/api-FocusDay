import { Request, Response } from "express";
import habitService from "@/service/habit-service";
import httpStatus from "http-status";

export async function createHabit(req: Request, res: Response) {
  try {
    const habitData = req.body;
    const habit = await habitService.createHabit(habitData);
    res.status(httpStatus.CREATED).json(habit);
  } catch (error) {
    console.error(error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
}

export async function findHabitByUserId(req: Request, res: Response) {
  try {
    const userId = Number(req.params.userId);
    const habits = await habitService.findHabitByUserId(userId);
    res.json(habits);
  } catch (error) {
    console.error(error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
}

export async function updateHabit(req: Request, res: Response) {
  try {
    const habitId = Number(req.params.habitId);
    const habitData = req.body;
    const habit = await habitService.updateHabit(habitId, habitData);
    res.json(habit);
  } catch (error) {
    console.error(error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
}

export async function deleteHabit(req: Request, res: Response) {
  try {
    const habitId = Number(req.params.habitId);
    await habitService.deleteHabit(habitId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
}

const habitController = {
  deleteHabit,
  updateHabit,
  findHabitByUserId,
  createHabit,
};

export default habitController;
