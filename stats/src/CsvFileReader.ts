import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: Array<T> = [];
  abstract filename: string;
  abstract mapRow(row: string[]): T;

  constructor() {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf8',
      })
      .split('\n')
      .map((match: string): string[] => match.split(','))
      .map(this.mapRow);
  }
}
