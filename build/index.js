"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./inheritance/MatchReader");
var MatchResult_1 = require("./typesValidations/MatchResult");
var MatchReader_2 = require("./composition/MatchReader");
var Summary_1 = require("./Summary");
var WinAnalysis_1 = require("./analyzers/WinAnalysis");
var ConsoleReport_1 = require("./reports/ConsoleReport");
var HtmlReport_1 = require("./reports/HtmlReport");
var matchReader = MatchReader_2.MatchReader.fromCsv('football.csv');
matchReader.load();
var summary = new Summary_1.Summary(new WinAnalysis_1.WinAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
var summary1 = new Summary_1.Summary(new WinAnalysis_1.WinAnalysis('Crystal Palace'), new HtmlReport_1.HtmlReport());
summary1.buildAndPrintReport(matchReader.matches);
var summary2 = Summary_1.Summary.winsAnalysisWithHtmlReport('Arsenal');
summary2.buildAndPrintReport(matchReader.matches);
//!==============================================================================
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Inheritance Example -> Manchester United won " + manUnitedWins + " games");
