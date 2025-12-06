import { Injectable } from '@nestjs/common';
import { CreateReclamoDto } from './dto/create-reclamo.dto';
import { UpdateReclamoDto } from './dto/update-reclamo.dto';
import { ReclamosRepository } from './repositories/reclamos.repository';

@Injectable()
export class ReclamoService {
  constructor(private readonly repository: ReclamosRepository) {}

  create(createReclamoDto: CreateReclamoDto) {
    return 'This action adds a new reclamo';
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} reclamo`;
  }

  update(id: number, updateReclamoDto: UpdateReclamoDto) {
    return `This action updates a #${id} reclamo`;
  }

  remove(id: number) {
    return `This action removes a #${id} reclamo`;
  }
}
