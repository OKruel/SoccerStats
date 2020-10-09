"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinAnalysis_1 = require("./analyzers/WinAnalysis");
var HtmlReport_1 = require("./reports/HtmlReport");
;
;
var Summary = /** @class */ (function () {
    function Summary(analyzer, report) {
        this.analyzer = analyzer;
        this.report = report;
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    ;
    Summary.prototype.buildAndPrintReport = function (matches) {
        var data = this.analyzer.run(matches);
        this.report.print(data);
    };
    ;
    return Summary;
}());
exports.Summary = Summary;
