const { PrismaClient } = require("@prisma/client");

globalThis.prismadb = new PrismaClient();
