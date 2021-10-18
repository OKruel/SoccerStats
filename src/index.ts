import { MatchReader as MatchReaderInheritance } from './inheritance/MatchReader';
import { MatchReader as MatchReaderComposition } from './composition/MatchReader';
import { MatchResult } from './typesValidations/MatchResult';
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';
import { HtmlReport } from './reports/HtmlReport';
/**
 * * DESCRIPTION:
 * Application that receives different types of files, format and read the files, apply an analyses and creates a report.
 * * FEATURES
 * 1 - Read external file.
 * 2 - Format and display the file
 * 3 - Analyses
 * 4 - Report
 * * GOAL
 * Comparison the implementation of Inheritance and Composition design patterns.
 * The comparison will happen only in the features 1 and 2 describing how the relationship between those two features will happen.
 * * APPROACH
 * Describe all properties, arguments and functions to understand what could be reused in other classes.
 * * COMPOSITION
 * One main class that holds all functionalities (read external file, format and display the file) and chooses which to delegate through Interface compliance.
 * In this example only the Read External File is delegated other classes can read different types of files also implementing the DataReader interface.
 * * INHERITANCE
 * Multiple classes implementing FILE READ functionality and delegating the commom DISPLAY RESULT to another class.
 * DISPLAY RESULT class extends all FILE READ classes to call their specific methods.
 */

// Composition example
const matchReader = MatchReaderComposition.fromCsv('football.csv');
matchReader.load();

const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);

const summary1 = new Summary(
	new WinAnalysis('Crystal Palace'),
	new HtmlReport()
);
summary1.buildAndPrintReport(matchReader.matches);

const summary2 = Summary.winsAnalysisWithHtmlReport('Arsenal');
summary2.buildAndPrintReport(matchReader.matches);

// Inheritance example
const reader = new MatchReaderInheritance('football.csv');
reader.read();

let manUnitedWins = 0;

for (const match of reader.data) {
	if (match[2] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
}

console.log(
	`Inheritance Example -> Manchester United won ${manUnitedWins} games`
);
