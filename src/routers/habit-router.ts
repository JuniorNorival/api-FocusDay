import { Router } from "express";
import habitController from "@/controllers/habit-controller";

const habitRouter = Router();

habitRouter.post("/", habitController.createHabit);
habitRouter.get("/users/:userId/habits", habitController.findHabitByUserId);
habitRouter.patch("/habits/:id", habitController.updateHabit);
habitRouter.delete("/habits/:id", habitController.deleteHabit);

export { habitRouter };
