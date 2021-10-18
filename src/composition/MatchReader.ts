import { stringToDate } from '../utils';
import { MatchResult } from '../typesValidations/MatchResult';
import { MatchData } from '../typesValidations/MatchTypes';
import { CsvFileReader } from './CsvFileReader';
/**
 * This Application consists in the following functionalities:
 * 1 - Read external file.
 * 2 - Format and display the file
 */

interface DataReader {
	read(): void;
	data: string[][];
}
/**
 * COMPOSITION IMPLEMENTATION
 * The MatchReader becomes the main class and delegates its functionalities by requiring compliance to INTERFACES in its properties, arguments or functions. WE HAVE ON "HOST CLASS THAT BRINGS IN DIFFERENT FUNCTIONALITIES THROUGH DIFFERENT CLASSES"
 * Read External File can have different implementations (as accepting diffent files formats) as long as it complies to the DataReader Interface.
 * The interface requires a read method and a data property, that will be used in the MatchReader load method.
 * The read method formats the external file and save result into the data property.
 * The load method will call the read method and access the data property and map through it to format it to display.
 */
export class MatchReader {
	/**
	 * Step 2
	 * Static function shared between class instances.
	 * Instatiate his own class with the argument of type DataReader received in the constructor.
	 * The argument received in the contructor is also a class that implements the DataReader interface and is intantiated.
	 * This new instance of type DataReader has the read method and the data property.
	 */
	static fromCsv(filename: string): MatchReader {
		return new MatchReader(new CsvFileReader(filename));
	}
	/**
	 * Step 4
	 * Property that contains the result of the application
	 * So it can be used in other functionalities the result must be in a format the obeys the MatchData interface.
	 */
	matches: MatchData[] = [];

	/**
	 * Step 1
	 * Receives argument of type interface DataReader
	 */
	constructor(private reader: DataReader) {}

	/**
	 * Step 3
	 * Uses the returned instance of the class of type DataReader to call the methods read() and to map through the data property and save the result inside the matches property.
	 */
	load(): void {
		// The this.reader is the instance returned by the new CSVFileReader(filename)
		this.reader.read();
		this.matches = this.reader.data.map((row: string[]): MatchData => {
			return [
				stringToDate(row[0]),
				row[1],
				row[2],
				parseInt(row[3]),
				parseInt(row[4]),
				row[5] as MatchResult,
				row[6],
			];
		});
	}
}
