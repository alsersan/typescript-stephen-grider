import { Reporter } from '../models/Reporter';

export class ConsoleReport implements Reporter {
  print(report: string): void {
    console.log(report);
  }
}
