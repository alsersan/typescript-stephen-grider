import { OutputTarget } from '../models/OutputTarget';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
