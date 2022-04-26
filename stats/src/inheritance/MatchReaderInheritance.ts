import { CsvFileReader } from './CsvFileReaderInheritance';
import { MatchResult } from '../MatchResult';
import { dateStringToDate } from '../utils';
import { MatchData } from '../MatchData';

export class MatchReader extends CsvFileReader<MatchData> {
  constructor(public filename: string) {
    super();
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3], 10),
      parseInt(row[4], 10),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
