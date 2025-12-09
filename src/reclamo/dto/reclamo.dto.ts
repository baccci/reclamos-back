import { Medidas } from 'src/common/enums/medidas.enum';

export class ReclamoDto {
  id: string;
  tipoReclamo: TipoReclamoDto;
  prioridad: Medidas;
  criticidad: Medidas;
  archivo?: string;
  descripcion: string;
  createdAt: Date;
  cambioEstado: CambioEstadoDto[];
}
