import { PrismaClient } from "@prisma/client";
import { envs } from "./config/plugins/envs.plugin";
import { MongoDatabase } from "./data/mongo/init";
import { LogModel } from "./data/mongo/models/log.model";
import { Server } from "./presentation/server";

(async () => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  const prisma = new PrismaClient();
  const newLog = await prisma.logModel.create({
    data: {
      level: "HIGH",
      message: "Test message",
      origin: "app.ts",
    },
  });

  // Server.start();
}
