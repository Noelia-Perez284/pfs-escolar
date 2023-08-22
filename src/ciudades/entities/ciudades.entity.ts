import { Escuela } from "src/escuela/entities/escuela.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('ciudades')
export class Ciudad {
    @PrimaryGeneratedColumn()
    idciudad:number;

    @Column({unique:true})
    nombre:string;

    @Column({unique:true})
    codigoPostal:string;

    @OneToMany((type)=> Escuela,(escuela)=>escuela.ciudad)
    @JoinColumn()
    escuelas:Escuela[];


    constructor(nombre:string,codigoPostal:string){
        this.nombre=nombre;
        this.codigoPostal=codigoPostal;
    }

}
