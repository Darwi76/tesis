import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { RCareerApplicationGranted } from './RCareerApplicationGranted';
import { RCareerApplicationPreGranted } from './RCareerApplicationPreGranted';
import { RPlacesPlanCareer } from './RPlacesPlanCareer';
import { RPlacesPlanCareerConvocation } from './RPlacesPlanCareerConvocation';
import { RPlacesPlanCareerProsecution } from './RPlacesPlanCareerProsecution';
import { RPlacesPlanCareerProsecutionPreassignment } from './RPlacesPlanCareerProsecutionPreassignment';
import { TbAdditionalRequirement } from './TbAdditionalRequirement';
import { TbProvince } from './TbProvince';
import { TbTerritorialLink } from './TbTerritorialLink';

@Index('tb_ces_pkey', ['id'], { unique: true })
@Index('idx_7ae1553d936305bb', ['nodeAt'], {})
@Index('idx_7ae1553de946114a', ['provinceId'], {})
@Index('idx_7ae1553d7805653', ['schoolYearAt'], {})
@Entity('tb_ces')
export class TbCes {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'province_id', nullable: true })
  provinceId: string | null;

  @Column('bigint', { name: 'node_at' })
  nodeAt: string;

  @Column('bigint', { name: 'school_year_at' })
  schoolYearAt: string;

  @Column('character varying', { name: 'code', length: 255 })
  code: string;

  @Column('character varying', { name: 'name', length: 255 })
  name: string;

  @Column('character varying', { name: 'short_name', length: 255 })
  shortName: string;

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

  @OneToMany(
    () => RCareerApplicationGranted,
    (rCareerApplicationGranted) => rCareerApplicationGranted.ces2,
  )
  rCareerApplicationGranteds: RCareerApplicationGranted[];

  @OneToMany(
    () => RCareerApplicationPreGranted,
    (rCareerApplicationPreGranted) => rCareerApplicationPreGranted.ces2,
  )
  rCareerApplicationPreGranteds: RCareerApplicationPreGranted[];

  @OneToMany(
    () => RPlacesPlanCareer,
    (rPlacesPlanCareer) => rPlacesPlanCareer.ces,
  )
  rPlacesPlanCareers: RPlacesPlanCareer[];

  @OneToMany(
    () => RPlacesPlanCareerConvocation,
    (rPlacesPlanCareerConvocation) => rPlacesPlanCareerConvocation.ces,
  )
  rPlacesPlanCareerConvocations: RPlacesPlanCareerConvocation[];

  @OneToMany(
    () => RPlacesPlanCareerProsecution,
    (rPlacesPlanCareerProsecution) => rPlacesPlanCareerProsecution.ces,
  )
  rPlacesPlanCareerProsecutions: RPlacesPlanCareerProsecution[];

  @OneToMany(
    () => RPlacesPlanCareerProsecutionPreassignment,
    (rPlacesPlanCareerProsecutionPreassignment) =>
      rPlacesPlanCareerProsecutionPreassignment.ces,
  )
  rPlacesPlanCareerProsecutionPreassignments: RPlacesPlanCareerProsecutionPreassignment[];

  @OneToMany(
    () => TbAdditionalRequirement,
    (tbAdditionalRequirement) => tbAdditionalRequirement.cesType,
  )
  tbAdditionalRequirements: TbAdditionalRequirement[];

  @ManyToOne(() => TbProvince, (tbProvince) => tbProvince.tbCes)
  @JoinColumn([{ name: 'province_id', referencedColumnName: 'id' }])
  province: TbProvince;

  @OneToMany(
    () => TbTerritorialLink,
    (tbTerritorialLink) => tbTerritorialLink.ces,
  )
  tbTerritorialLinks: TbTerritorialLink[];
}
