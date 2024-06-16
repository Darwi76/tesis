import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "./estudiante.entity";

@Entity()
export class Provincia{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany( () => Estudiante, estudiante => estudiante.id)
    @JoinColumn()
    estudiante;
}