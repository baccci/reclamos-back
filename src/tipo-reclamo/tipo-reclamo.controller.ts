import { Controller, Get, Param } from '@nestjs/common';
import { TipoReclamoService } from './tipo-reclamo.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('access-token')
@Controller('tipo-reclamo')
export class TipoReclamoController {
  constructor(private readonly tipoReclamoService: TipoReclamoService) {}

  @Get()
  findAll() {
    return this.tipoReclamoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoReclamoService.findOne(id);
  }
}
