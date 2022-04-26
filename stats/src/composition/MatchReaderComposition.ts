import { MatchData } from '../models/MatchData';
import { MatchResult } from '../models/MatchResult';
import { dateStringToDate } from '../utils';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(private reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
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
