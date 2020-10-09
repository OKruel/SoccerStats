"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
var MatchResult_1 = require("../typesValidations/MatchResult");
var WinAnalysis = /** @class */ (function () {
    function WinAnalysis(teamName) {
        this.teamName = teamName;
    }
    WinAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[2] === this.teamName && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.teamName && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return this.teamName + " won " + wins + " games ";
    };
    return WinAnalysis;
}());
exports.WinAnalysis = WinAnalysis;
