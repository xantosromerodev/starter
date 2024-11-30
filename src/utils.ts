import path from 'path';
import { fileURLToPath } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, '../static');

export function getStaticFile(fileName: string): string {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}
