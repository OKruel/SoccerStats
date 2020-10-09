import { MatchReader } from './inheritance/MatchReader';
import { MatchResult } from './typesValidations/MatchResult';

import { MatchReader as MatchReader1 } from './composition/MatchReader';
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';
import { HtmlReport } from './reports/HtmlReport';

const matchReader = MatchReader1.fromCsv('football.csv');
matchReader.load();

const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);

const summary1 = new Summary(new WinAnalysis('Crystal Palace'), new HtmlReport());
summary1.buildAndPrintReport(matchReader.matches);

const summary2 = Summary.winsAnalysisWithHtmlReport('Arsenal');
summary2.buildAndPrintReport(matchReader.matches);

//!==============================================================================


const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins = 0;

for (const match of reader.data) {
    if (match[2] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Inheritance Example -> Manchester United won ${manUnitedWins} games`);



