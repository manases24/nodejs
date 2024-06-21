export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface LogEntityOptions {
  message: string;
  level: LogSeverityLevel;
  origin: string;
  createdAt?: Date;
}

export class LogEntity {
  public level: LogSeverityLevel;
  public message: string;
  public origin: string;
  public createdAt: Date;

  constructor(options: LogEntityOptions) {
    this.message = options.message;
    this.level = options.level;
    this.createdAt = new Date();
    this.origin = options.origin;
  }

  static fromJson = (json: string): LogEntity => {
    const { message, level, createdAt, origin } = JSON.parse(json);

    const log = new LogEntity({ message, level, origin, createdAt });

    return log;
  };
}
