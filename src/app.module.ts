import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EscuelaModule } from './escuela/escuela.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadesModule } from './ciudades/ciudades.module';
import { ClaseModule } from './clase/clase.module';

@Module({
  imports: [TypeOrmModule.forRoot( {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "12345678",
    "database": "escolar",
    "entities": [
       "dist/**/**.entity{.ts,.js}"
    ],
    "synchronize": true
  }),EscuelaModule, EstudiantesModule, ProfesoresModule, CiudadesModule, ClaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
