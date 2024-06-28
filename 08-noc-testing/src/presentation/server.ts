import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/fyle-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

// const logRepository = new LogRepositoryImpl(
//   new FileSystemDatasource(),
//    new MongoLogDatasource(),
//   new PostgresLogDatasource()
// );
const fsLogRepository = new LogRepositoryImpl(new FileSystemDatasource());
const mongoLogRepository = new LogRepositoryImpl(new MongoLogDatasource());
const postgresLogRepository = new LogRepositoryImpl(
  new PostgresLogDatasource()
);

const emailService = new EmailService();

export class Server {
  public static start() {
    console.log("Server started...");

    // new SendEmailLogs(emailService, fileSystemLogRepository).execute(
    //   "hlk@gmail.com"
    // );
    // emailService.sendEmailWithFileSystemLogs(
    //   ['fernando.herrera85@gmail.com','fernando.herrera.cr@gmail.com']
    // );

    CronService.createJob("*/5 * * * * *", () => {
      const url = "https://discord.com";
      new CheckServiceMultiple(
        [fsLogRepository, postgresLogRepository, mongoLogRepository],
        () => console.log(`${url} is ok`),
        (error) => console.log(error)
      ).execute(url);
      // new CheckService().execute( 'http://localhost:3000' );
    });
  }
}
