import "reflect-metadata";
import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";

import { loadEnv, connectDb, disconnectDB, connectRedis } from "@/config";

loadEnv();

import { handleApplicationErrors } from "@/middlewares";
import * as r from "@/routers";

const app = express();

app.use(cors()).use("/users", r.usersRouter).use("/habit", r.habitRouter);

export function init(): Promise<Express> {
  connectDb();
  connectRedis();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
