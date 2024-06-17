import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Carrera, Provincia } from './index';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  nota: number;

  @ManyToMany(() => Carrera, (carrera) => carrera.estudiantes)
  @JoinTable()
  carreras_optadas: Carrera[];

  @ManyToOne(() => Provincia, (provincia) => provincia.id)
  @JoinColumn()
  provincia: Provincia;
}
