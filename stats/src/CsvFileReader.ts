import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf8',
      })
      .split('\n')
      .map((match: string): string[] => match.split(','));
  }
}
