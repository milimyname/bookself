import { PrismaClient } from '@prisma/client';

interface GlobalThisWithPrisma {
	prisma?: PrismaClient;
}

const prisma: PrismaClient = (global as GlobalThisWithPrisma).prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
	(global as GlobalThisWithPrisma).prisma = prisma;
}

export { prisma };
