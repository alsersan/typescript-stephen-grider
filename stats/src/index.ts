import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf8',
  })
  .split('\n')
  .map((match: string): string[] => match.split(','));

let manUnitedWins = 0;

matches.forEach((match: string[]) => {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
});

console.log(manUnitedWins);
