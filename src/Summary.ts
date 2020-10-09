import { MatchData } from "./typesValidations/MatchTypes";
import { WinAnalysis } from './analyzers/WinAnalysis';
import { HtmlReport } from './reports/HtmlReport';

interface Analyzer {
    run(matches: MatchData[]): string;
};

interface OutputFormat {
    print(report: string): void;
};

class Summary {

    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinAnalysis(team),
            new HtmlReport()
        );
    };

    constructor(public analyzer: Analyzer, public report: OutputFormat) { }

    buildAndPrintReport(matches: MatchData[]): void {
        const data = this.analyzer.run(matches);
        this.report.print(data);
    };
}


export { Analyzer, OutputFormat, Summary };
