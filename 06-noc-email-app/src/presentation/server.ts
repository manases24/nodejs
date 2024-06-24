import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/fyle-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);

const emailService = new EmailService();
export class Server {
  public static start() {
    console.log("Server started");
    new SendEmailLogs(emailService, fileSystemLogRepository).execute([
      "hugo.orlando2030@gmail.com",
    ]);
    // emailService.sendEmailWithFileSystemLogs("hugo.orlando2030@gmail.com");

    CronService.createJob("*/5 * * * * *", () => {
      const url = "https://discord.com/";
      new CheckService(
        fileSystemLogRepository,
        () => console.log(`${url} is ok`),
        (error) => console.log(error)
      ).execute(url);
      // new CheckService().execute("http://localhost:3000");
    });
  }
}
