"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = void 0;
var stringToDate = function (dateString) {
    var dateNumberParts = dateString
        .split('/')
        .map(function (value) { return parseInt(value); });
    return new Date(dateNumberParts[2], dateNumberParts[1] - 1, dateNumberParts[0]);
};
exports.stringToDate = stringToDate;
