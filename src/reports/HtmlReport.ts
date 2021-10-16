import fs from 'fs';
import { OutputFormat } from '../Summary';

class HtmlReport implements OutputFormat {

    print(report: string): void {
        const html = `
        <div>
            <h2>Analysis Report</h2>
            <div>${report}</div>
        </div>
        `
        fs.writeFileSync('report.html', html);
    };
};

export { HtmlReport };