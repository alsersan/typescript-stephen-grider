import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './composition/CsvFileReaderComposition';
import { MatchReader } from './composition/MatchReaderComposition';
import { MatchResult } from './models/MatchResult';
import { ConsoleReport } from './reporters/ConsoleReport';
import { Summary } from './Summary';

// INHERITANCE APPROACH (OLD)
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
const matchReader = new MatchReader(reader);
matchReader.load();

const analyzer = new WinsAnalysis('Man United');
const reporter = new ConsoleReport();
const summary = new Summary(analyzer, reporter);

summary.buildAndPrintReport(matchReader.matches);
