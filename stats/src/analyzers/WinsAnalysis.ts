import { Analyzer } from '../models/Analyzer';
import { MatchData } from '../models/MatchData';
import { MatchResult } from '../models/MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    matches.forEach((match) => {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    });

    return `team ${this.teamName} won ${wins} games`;
  }
}
