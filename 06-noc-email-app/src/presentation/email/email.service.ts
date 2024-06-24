import nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachements: Attachment[];
}

interface Attachment {
  filename: string;
  path: string;
}

export class EmailService {
  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    try {
      const sentInformation = await this.transporter.sendMail({
        to: options.to,
        subject: options.subject,
        html: options.htmlBody,
        attachments: options.attachements,
      });
      console.log(sentInformation);
      return true;
    } catch (error) {
      return false;
    }
  }

  async sendEmailWithFileSystemLogs(to: string | string[]) {
    const subject = "Logs del servidor";
    const htmlBody = `
        <h3>Logs de sistemas - NOC </h3>
        <p>Ola polar y heladas intensas en CABA y alrededores: como continuara el tiempo durante la semana</p>
        <p>Ver logs adjuntos</p>
      `;
    const attachements: Attachment[] = [
      { filename: "logs-all.log", path: "./" },
    ];

    this.sendEmail({ to, subject, attachements, htmlBody });
  }
}
