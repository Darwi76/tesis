import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Interchange {
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
  index: number;

  @Column()
  ladder: number;

  @Column()
  state: string;

  @Column()
  sma: string;

  @Column()
  califications: string;

  @Column()
  incomeSource: string;

  @Column()
  preuniversity: string;

  @Column()
  comissionFrom: string;

  @Column()
  comissionTo: string;

  @Column()
  exclude: boolean;
}
