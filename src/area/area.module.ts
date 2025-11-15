import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { AreaRepository } from './repository/area.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AreaController],
  providers: [
    AreaService,
    {
      provide: 'IAreaRepository',
      useClass: AreaRepository,
    },
  ],
})
export class AreaModule {}
