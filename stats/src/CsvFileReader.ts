import fs from 'fs';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf8',
      })
      .split('\n')
      .map((match: string): string[] => match.split(','))
      .map((el: string[]): any => [
        dateStringToDate(el[0]),
        el[1],
        el[2],
        parseInt(el[3], 10),
        parseInt(el[4], 10),
        el[5] as MatchResult,
        el[6],
      ]);
  }
}
