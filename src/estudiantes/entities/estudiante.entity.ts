import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estudiantes')
export class Estudiante {
    @PrimaryGeneratedColumn()
    idEstudiante: number;

    @Column()
    apellidoNombres: string;

    @Column()
    fechanacimiento:string;

    constructor(apellidoNombres:string,fechaNacimiento:string){
        this.apellidoNombres=apellidoNombres;
        this.fechanacimiento=fechaNacimiento;
    }
    

}
