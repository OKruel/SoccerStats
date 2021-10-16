import fs from 'fs';
// Composition example
// This could read any type of file, but to be used inside of the MatchReader class it has to obey the interface DataReader.
// The interface demands a data propety and a read method.
// The read method will format the file and save the result inside the data property.
// This class has no relationship with the main MatchReader

class CsvFileReader {
	data: string[][] = [];

	constructor(public filename: string) {}

	read(): void {
		this.data = fs
			.readFileSync(this.filename, { encoding: 'utf-8' })
			.split('\n')
			.map((match: string) => match.split(','));
	}
}

export { CsvFileReader };
