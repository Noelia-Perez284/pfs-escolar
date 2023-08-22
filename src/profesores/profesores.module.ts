import { Module } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { ProfesoresController } from './profesores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './entities/profesore.entity';
import { Clase } from 'src/clase/entities/clase.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Profesor,Clase])],
  controllers: [ProfesoresController],
  providers: [ProfesoresService],
})
export class ProfesoresModule {}
