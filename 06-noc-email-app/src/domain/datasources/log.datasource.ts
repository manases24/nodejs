import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// Clase abstracta no se puede instanciar
export abstract class LogDatasource {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
