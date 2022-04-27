import { Analyzer } from './models/Analyzer';
import { MatchData } from './models/MatchData';
import { OutputTarget } from './models/OutputTarget';

export class Summary {
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]) {
    const analysis = this.analyzer.run(matches);
    this.outputTarget.print(analysis);
  }
}
