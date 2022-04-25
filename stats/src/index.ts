import { CsvFileReader } from './CsvFileReader';

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWins = 0;

reader.data.forEach((match: string[]) => {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
});

console.log(manUnitedWins);
