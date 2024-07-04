import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TbStudent } from './TbStudent';

@Index('nom_nationality_pkey', ['id'], { unique: true })
@Index('idx_14f1c213936305bb', ['nodeAt'], {})
@Entity('nom_nationality')
export class NomNationality {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'node_at' })
  nodeAt: string;

  @Column('character varying', { name: 'name', length: 255 })
  name: string;

  @Column('character varying', { name: 'type', length: 255 })
  type: string;

  @Column('timestamp without time zone', { name: 'created_at' })
  createdAt: Date;

  @Column('timestamp without time zone', { name: 'updated_at' })
  updatedAt: Date;

  @Column('timestamp without time zone', {
    name: 'deleted_at',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  deletedAt: Date | null;

  @OneToMany(() => TbStudent, (tbStudent) => tbStudent.nationality)
  tbStudents: TbStudent[];
}
