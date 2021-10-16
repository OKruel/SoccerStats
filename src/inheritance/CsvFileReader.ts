import fs from 'fs';

abstract class CsvFileReader<T> {

    data: T[] = [];

    constructor(public filename: string) { }

    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = fs
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map((match: string) => match.split(','))
            .map(this.mapRow);
    };
};

export { CsvFileReader };