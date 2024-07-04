import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Discapacitado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  commission: string;

  @Column()
  ci: string;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  incomeSource: string;

  @Column()
  preuniversity: string;

  @Column()
  discapacitado: boolean;
}
