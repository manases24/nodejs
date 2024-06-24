import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/fyle-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);
export class Server {
  public static start() {
    console.log("Server started");

    const emailService = new EmailService();
    emailService.sendEmail({
      to: "hugo.orlando2030@gmail.com",
      subject: "Logs de sistemas",
      htmlBody: `
        <h3>Logs de sistemas - NOC </h3>
        <p>Ola polar y heladas intensas en CABA y alrededores: como continuara el tiempo durante la semana</p>
        <p>Ver logs adjuntos</p>
      `,
    });

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
