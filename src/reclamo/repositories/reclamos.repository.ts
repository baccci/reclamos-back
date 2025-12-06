import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ReclamosRepository {
  private filePath = path.join(process.cwd(), "src", "reclamos.json")

  findAll() {
    const file = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(file);
  }
}
