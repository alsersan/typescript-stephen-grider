import { CsvFileReader } from './composition/CsvFileReaderComposition';
import { MatchReader } from './composition/MatchReaderComposition';
import { MatchResult } from './MatchResult';

// INHERITANCE APPROACH
/* const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins = 0;

reader.data.forEach((match) => {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}); */

// COMPOSITION APPROACH
const reader = new CsvFileReader('football.csv');
const matches = new MatchReader(reader);
matches.load();

let manUnitedWins = 0;

matches.matches.forEach((match) => {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
});

console.log(manUnitedWins);
