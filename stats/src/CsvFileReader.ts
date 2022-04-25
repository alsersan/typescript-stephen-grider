import fs from 'fs';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf8',
      })
      .split('\n')
      .map((match: string): string[] => match.split(','))
      .map(
        (el: string[]): MatchData => [
          dateStringToDate(el[0]),
          el[1],
          el[2],
          parseInt(el[3], 10),
          parseInt(el[4], 10),
          el[5] as MatchResult,
          el[6],
        ]
      );
  }
}
