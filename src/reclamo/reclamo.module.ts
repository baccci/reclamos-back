import { Module } from '@nestjs/common';
import { ReclamoService } from './reclamo.service';
import { ReclamoController } from './reclamo.controller';
import { ReclamosRepository } from './repositories/reclamos.repository';

@Module({
  controllers: [ReclamoController],
  providers: [ReclamoService, ReclamosRepository],
})
export class ReclamoModule {}
