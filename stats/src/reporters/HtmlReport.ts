import fs from 'fs';
import { OutputTarget } from '../models/OutputTarget';

export class HtmlReport implements OutputTarget {
  print(report: string) {
    const output = `
      <div>
        <h1>Analysis Output</h1>
        <p>${report}</p>
      </div>
    `;
    fs.writeFileSync('output.html', output);
  }
}
