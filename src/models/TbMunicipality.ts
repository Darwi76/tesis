import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TbProvince } from './TbProvince';
import { TbPreuniversity } from './TbPreuniversity';
import { TbStudent } from './TbStudent';

@Index('tb_municipality_pkey', ['id'], { unique: true })
@Index('idx_f5ce57d3936305bb', ['nodeAt'], {})
@Index('idx_f5ce57d3e946114a', ['provinceId'], {})
@Index('idx_f5ce57d37805653', ['schoolYearAt'], {})
@Entity('tb_municipality')
export class TbMunicipality {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'province_id', nullable: true })
  provinceId: string | null;

  @Column('bigint', { name: 'node_at' })
  nodeAt: string;

  @Column('bigint', { name: 'school_year_at' })
  schoolYearAt: string;

  @Column('character varying', {
    name: 'code',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  code: string | null;

  @Column('character varying', { name: 'name', length: 255 })
  name: string;

  @Column('character varying', {
    name: 'short_name',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  shortName: string | null;

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

  @ManyToOne(() => TbProvince, (tbProvince) => tbProvince.tbMunicipalities)
  @JoinColumn([{ name: 'province_id', referencedColumnName: 'id' }])
  province: TbProvince;

  @OneToMany(
    () => TbPreuniversity,
    (tbPreuniversity) => tbPreuniversity.municipality,
  )
  tbPreuniversities: TbPreuniversity[];

  @OneToMany(() => TbStudent, (tbStudent) => tbStudent.municipality)
  tbStudents: TbStudent[];
}
