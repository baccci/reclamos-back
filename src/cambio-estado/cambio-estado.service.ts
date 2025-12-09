import { Injectable } from '@nestjs/common';
import { CreateCambioEstadoDto } from './dto/create-cambio-estado.dto';
import { EmpleadoService } from 'src/empleado/empleado.service';

@Injectable()
export class CambioEstadoService {
  constructor(
    private readonly cambioEstadoRepository: CambioEstadoRepository,
    private readonly empleadoService: EmpleadoService,
  ) {}

  create(dto: CreateCambioEstadoDto): Promise<CambioEstadoDto | null> {
    //1. validar area
    const cambioEstado = this.cambioEstadoRepository.create(data);
  }
}
