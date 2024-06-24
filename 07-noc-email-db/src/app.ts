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

  const newLog = await LogModel.create({
    message: "Test message from Mongo",
    origin: "app.ts",
    level: "low",
  });

  await newLog.save();
  console.log(newLog);

  // Server.start();
}
