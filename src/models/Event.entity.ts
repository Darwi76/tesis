import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ci: string;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  incomeSource: string;

  @Column()
  province: string;

  @Column()
  ces: string;
}
