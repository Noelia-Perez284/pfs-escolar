import { Module } from '@nestjs/common';
import { CiudadesService } from './ciudades.service';
import { CiudadesController } from './ciudades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudad } from './entities/ciudades.entity';
import { Escuela } from 'src/escuela/entities/escuela.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Ciudad,Escuela])],
  controllers: [CiudadesController],
  providers: [CiudadesService],
})
export class CiudadesModule {}
