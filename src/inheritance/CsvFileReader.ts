import fs from 'fs';
/**
 * INHERITANCE IMPLEMENTATION
 * Create different classes (each to read a different file type) for the READ FILE functionality.
 * In each of those classes the DISPLAY RESULT functionality would be abstract to another class to implement by extending the READ FILE class.
 * As the DISPLAY RESULT connects to the ANALYSIS and REPORT, we have one DISPLAY RESULT class that extends all the different READ FILES classes.
 */
abstract class CsvFileReader<T> {
	data: T[] = [];

	constructor(public filename: string) {}

	abstract mapRow(row: string[]): T;

	read(): void {
		this.data = fs
			.readFileSync(this.filename, { encoding: 'utf-8' })
			.split('\n')
			.map((match: string) => match.split(','))
			.map(this.mapRow);
	}
}

export { CsvFileReader };
