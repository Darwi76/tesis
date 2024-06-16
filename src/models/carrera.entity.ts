import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from ".";

@Entity()
export class Carrera{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    plazas: number;

    @ManyToOne( () => Estudiante, estudiante => estudiante.carreras_optadas)
    estudiantes: Estudiante[];
}