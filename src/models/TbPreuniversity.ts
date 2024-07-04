import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TbMunicipality } from './TbMunicipality';
import { TbProvince } from './TbProvince';
import { TbStudent } from './TbStudent';

@Index('idx_35dee228f54384de', ['commissionAt'], {})
@Index('tb_preuniversity_pkey', ['id'], { unique: true })
@Index('idx_35dee228ae6f181c', ['municipalityId'], {})
@Index('idx_35dee228936305bb', ['nodeAt'], {})
@Index('idx_35dee22856cba196', ['nomIncomeSourceFatherId'], {})
@Index('idx_35dee228cfe48378', ['nomPreuniversityId'], {})
@Index('idx_35dee228e946114a', ['provinceId'], {})
@Index('idx_35dee2287805653', ['schoolYearAt'], {})
@Entity('tb_preuniversity')
export class TbPreuniversity {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'municipality_id', nullable: true })
  municipalityId: string | null;

  @Column('bigint', { name: 'province_id', nullable: true })
  provinceId: string | null;

  @Column('bigint', { name: 'nom_preuniversity_id', nullable: true })
  nomPreuniversityId: string | null;

  @Column('bigint', { name: 'nom_income_source_father_id', nullable: true })
  nomIncomeSourceFatherId: string | null;

  @Column('bigint', { name: 'node_at' })
  nodeAt: string;

  @Column('bigint', { name: 'school_year_at' })
  schoolYearAt: string;

  @Column('bigint', { name: 'commission_at' })
  commissionAt: string;

  @Column('character varying', { name: 'code', length: 255 })
  code: string;

  @Column('character varying', { name: 'name', length: 255 })
  name: string;

  @Column('integer', { name: 'numberofstudents' })
  numberofstudents: number;

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

  @ManyToOne(
    () => TbMunicipality,
    (tbMunicipality) => tbMunicipality.tbPreuniversities,
  )
  @JoinColumn([{ name: 'municipality_id', referencedColumnName: 'id' }])
  municipality: TbMunicipality;

  @ManyToOne(() => TbProvince, (tbProvince) => tbProvince.tbPreuniversities)
  @JoinColumn([{ name: 'province_id', referencedColumnName: 'id' }])
  province: TbProvince;

  @OneToMany(() => TbStudent, (tbStudent) => tbStudent.preuniversity)
  tbStudents: TbStudent[];
}
