import { MatchReader } from './inheritance/MatchReaderInheritance';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins = 0;

reader.data.forEach((match) => {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
});

console.log(manUnitedWins);
