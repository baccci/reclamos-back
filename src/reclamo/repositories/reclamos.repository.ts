import { Injectable } from '@nestjs/common';
import prisma from '../../lib/db';
import * as fs from 'fs';
import * as path from 'path';
import { ReclamoCreateData } from '../interfaces/reclamo-create.interface';
import { Reclamo } from '@prisma/client';

@Injectable()
export class ReclamosRepository {
  private filePath = path.join(process.cwd(), "src", "reclamos.json")

  findAll() {
    const file = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(file);
  }

  async create(data: ReclamoCreateData): Promise<Reclamo> {
    try {
      return await prisma.reclamo.create({ data });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error al crear el reclamo: ${error.message}`);
      }

      throw new Error(`Error al crear el reclamo: ${String(error)}`);
    }
  }
}
