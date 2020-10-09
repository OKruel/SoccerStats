import { stringToDate } from '../utils';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from '../typesValidations/MatchResult';
import { MatchData } from '../typesValidations/MatchTypes';

class MatchReader extends CsvFileReader<MatchData> {

    mapRow(row: string[]): MatchData {
        return [
            stringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ]
    }
}

export { MatchReader };