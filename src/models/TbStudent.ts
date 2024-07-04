import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TbAdditionalRequirement } from './TbAdditionalRequirement';
import { TbApplication } from './TbApplication';
import { TbApplicationInterchange } from './TbApplicationInterchange';
import { TbApplicationLoad } from './TbApplicationLoad';
import { TbMunicipality } from './TbMunicipality';
import { NomNationality } from './NomNationality';
import { TbPreuniversity } from './TbPreuniversity';
import { TbProvince } from './TbProvince';

@Index('idx_c89d6b77f54384de', ['commissionAt'], {})
@Index('idx_c89d6b77f92f3e70', ['countryId'], {})
@Index('idx_c89d6b7713fc3de1', ['currentSituationTypeId'], {})
@Index('tb_student_pkey', ['id'], { unique: true })
@Index('idx_c89d6b77d2a7b295', ['incomeSourceId'], {})
@Index('idx_c89d6b77aec96dc6', ['laboralSectorFatherId'], {})
@Index('idx_c89d6b773916e129', ['laboralSectorMotherId'], {})
@Index('idx_c89d6b77ae6f181c', ['municipalityId'], {})
@Index('idx_c89d6b771c9da55', ['nationalityId'], {})
@Index('idx_c89d6b77936305bb', ['nodeAt'], {})
@Index('idx_c89d6b7781e2cf9d', ['occupationFatherId'], {})
@Index('idx_c89d6b77163d4372', ['occupationMotherId'], {})
@Index('idx_c89d6b77aa902ccf', ['preuniversityId'], {})
@Index('idx_c89d6b7738ca82be', ['provenanceTypeId'], {})
@Index('idx_c89d6b77e946114a', ['provinceId'], {})
@Index('idx_c89d6b773989c881', ['scholarshipFatherId'], {})
@Index('idx_c89d6b77ae56446e', ['scholarshipMotherId'], {})
@Index('idx_c89d6b777805653', ['schoolYearAt'], {})
@Index('idx_c89d6b77a4d49960', ['sexTypeId'], {})
@Index('idx_c89d6b7721dc23e8', ['skinColorTypeId'], {})
@Entity('tb_student', { schema: 'public' })
export class TbStudent {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'nationality_id', nullable: true })
  nationalityId: string | null;

  @Column('bigint', { name: 'country_id', nullable: true })
  countryId: string | null;

  @Column('bigint', { name: 'municipality_id', nullable: true })
  municipalityId: string | null;

  @Column('bigint', { name: 'province_id', nullable: true })
  provinceId: string | null;

  @Column('bigint', { name: 'income_source_id', nullable: true })
  incomeSourceId: string | null;

  @Column('bigint', { name: 'scholarship_father_id', nullable: true })
  scholarshipFatherId: string | null;

  @Column('bigint', { name: 'scholarship_mother_id', nullable: true })
  scholarshipMotherId: string | null;

  @Column('bigint', { name: 'occupation_father_id', nullable: true })
  occupationFatherId: string | null;

  @Column('bigint', { name: 'occupation_mother_id', nullable: true })
  occupationMotherId: string | null;

  @Column('bigint', { name: 'provenance_type_id', nullable: true })
  provenanceTypeId: string | null;

  @Column('bigint', { name: 'current_situation_type_id', nullable: true })
  currentSituationTypeId: string | null;

  @Column('bigint', { name: 'skin_color_type_id', nullable: true })
  skinColorTypeId: string | null;

  @Column('bigint', { name: 'sex_type_id', nullable: true })
  sexTypeId: string | null;

  @Column('bigint', { name: 'laboral_sector_father_id', nullable: true })
  laboralSectorFatherId: string | null;

  @Column('bigint', { name: 'laboral_sector_mother_id', nullable: true })
  laboralSectorMotherId: string | null;

  @Column('bigint', { name: 'preuniversity_id', nullable: true })
  preuniversityId: string | null;

  @Column('bigint', { name: 'node_at' })
  nodeAt: string;

  @Column('bigint', { name: 'school_year_at' })
  schoolYearAt: string;

  @Column('bigint', { name: 'commission_at' })
  commissionAt: string;

  @Column('boolean', { name: 'disability' })
  disability: boolean;

  @Column('character varying', { name: 'name', length: 255 })
  name: string;

  @Column('character varying', { name: 'lastname', length: 255 })
  lastname: string;

  @Column('character varying', { name: 'ci', length: 255 })
  ci: string;

  @Column('text', { name: 'address' })
  address: string;

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

  @Column('integer', { name: 'nuevo_academic_index', nullable: true })
  nuevoAcademicIndex: number | null;

  @OneToMany(
    () => TbAdditionalRequirement,
    (tbAdditionalRequirement) => tbAdditionalRequirement.student,
  )
  tbAdditionalRequirements: TbAdditionalRequirement[];

  @OneToMany(() => TbApplication, (tbApplication) => tbApplication.student)
  tbApplications: TbApplication[];

  @OneToMany(
    () => TbApplicationInterchange,
    (tbApplicationInterchange) => tbApplicationInterchange.student,
  )
  tbApplicationInterchanges: TbApplicationInterchange[];

  @OneToMany(
    () => TbApplicationLoad,
    (tbApplicationLoad) => tbApplicationLoad.student,
  )
  tbApplicationLoads: TbApplicationLoad[];

  @ManyToOne(
    () => TbMunicipality,
    (tbMunicipality) => tbMunicipality.tbStudents,
  )
  @JoinColumn([{ name: 'municipality_id', referencedColumnName: 'id' }])
  municipality: TbMunicipality;

  @ManyToOne(
    () => NomNationality,
    (nomNationality) => nomNationality.tbStudents,
  )
  @JoinColumn([{ name: 'nationality_id', referencedColumnName: 'id' }])
  nationality: NomNationality;

  @ManyToOne(
    () => TbPreuniversity,
    (tbPreuniversity) => tbPreuniversity.tbStudents,
  )
  @JoinColumn([{ name: 'preuniversity_id', referencedColumnName: 'id' }])
  preuniversity: TbPreuniversity;

  @ManyToOne(() => TbProvince, (tbProvince) => tbProvince.tbStudents)
  @JoinColumn([{ name: 'province_id', referencedColumnName: 'id' }])
  province: TbProvince;
}
