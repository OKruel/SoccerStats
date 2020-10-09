import { Analyzer } from "../Summary";
import { MatchData } from "../typesValidations/MatchTypes";
import { MatchResult } from '../typesValidations/MatchResult';

class WinAnalysis implements Analyzer {

    constructor(public teamName: string) { }

    run(matches: MatchData[]): string {

        let wins = 0;

        for (let match of matches) {
            if (match[2] === this.teamName && match[5] === MatchResult.HomeWin) {
                wins++;
            } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
                wins++;
            }
        }

        return `${this.teamName} won ${wins} games `;
    }

}

export { WinAnalysis };