import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TbCes } from './TbCes';
import { TbMunicipality } from './TbMunicipality';
import { TbPlacesPlan } from './TbPlacesPlan';
import { TbPreuniversity } from './TbPreuniversity';
import { TbStudent } from './TbStudent';
import { TbTerritorialLink } from './TbTerritorialLink';

@Index('tb_province_pkey', ['id'], { unique: true })
@Index('idx_3b14ef46936305bb', ['nodeAt'], {})
@Index('idx_3b14ef46ac73a42c', ['nomCommissionId'], {})
@Index('idx_3b14ef467805653', ['schoolYearAt'], {})
@Entity('tb_province')
export class TbProvince {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'nom_commission_id', nullable: true })
  nomCommissionId: string | null;

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

  @OneToMany(() => TbCes, (tbCes) => tbCes.province)
  tbCes: TbCes[];

  @OneToMany(() => TbMunicipality, (tbMunicipality) => tbMunicipality.province)
  tbMunicipalities: TbMunicipality[];

  @OneToMany(() => TbPlacesPlan, (tbPlacesPlan) => tbPlacesPlan.province)
  tbPlacesPlans: TbPlacesPlan[];

  @OneToMany(
    () => TbPreuniversity,
    (tbPreuniversity) => tbPreuniversity.province,
  )
  tbPreuniversities: TbPreuniversity[];

  @OneToMany(() => TbStudent, (tbStudent) => tbStudent.province)
  tbStudents: TbStudent[];

  @OneToMany(
    () => TbTerritorialLink,
    (tbTerritorialLink) => tbTerritorialLink.province,
  )
  tbTerritorialLinks: TbTerritorialLink[];
}
