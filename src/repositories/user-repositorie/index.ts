import { prisma } from "../../config/index.js";
import { Prisma } from "@prisma/client";

async function create(data: object) {
  return prisma.user.create({
    data,
  });
}

async function findByEmail(email: string) {
  const params = {
    where: {
      email,
    },
  };

  return prisma.user.findUnique(params);
}

const userRepository = {
  findByEmail,
  create,
};

export default userRepository;
