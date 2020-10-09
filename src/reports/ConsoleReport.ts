import { OutputFormat } from '../Summary';

class ConsoleReport implements OutputFormat {
    print(report: string): void {
        console.log(report);
    };
};

export { ConsoleReport };