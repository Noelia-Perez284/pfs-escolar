import { Clase } from "src/clase/entities/clase.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('profesores')
export class Profesor {
    @PrimaryGeneratedColumn()
    idProfesor:number;

    @Column()
    apellidosNombres:string;

    @OneToMany((type)=>Clase, (clase)=>clase.profesor)
    @JoinColumn()
    clases:Clase[];

    constructor(apellidoNombres:string){
        this.apellidosNombres=apellidoNombres;
    }
}
