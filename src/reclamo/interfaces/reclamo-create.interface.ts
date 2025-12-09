import { Medidas } from 'src/common/enums/medidas.enum';

export interface ReclamoCreateData {
  tipoReclamoId: string;
  prioridad: Medidas;
  criticidad: Medidas;
  descripcion: string;
}
