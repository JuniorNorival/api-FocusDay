import userRepository from "../../repositories/user-repositorie";
import bcrypt from "bcrypt";
import { duplicatedEmailError } from "@/errors";
import { User } from "@prisma/client";

export async function createUser({
  name,
  email,
  password,
}: CreateUserParams): Promise<User> {
  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({ name, email, password: hashedPassword });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

export type CreateUserParams = Pick<User, "email" | "password" | "name">;

const userService = {
  createUser,
};

export default userService;
