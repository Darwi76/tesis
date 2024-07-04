import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { RPlacesPlanCareer } from './RPlacesPlanCareer';
import { RPlacesPlanCareerConvocation } from './RPlacesPlanCareerConvocation';
import { RPlacesPlanCareerProsecution } from './RPlacesPlanCareerProsecution';
import { RPlacesPlanCareerProsecutionPreassignment } from './RPlacesPlanCareerProsecutionPreassignment';
import { TbProvince } from './TbProvince';

@Index('tb_places_plan_pkey', ['id'], { unique: true })
@Index('idx_614beb65936305bb', ['nodeAt'], {})
@Index('idx_614beb65e946114a', ['provinceId'], {})
@Index('idx_614beb657805653', ['schoolYearAt'], {})
@Entity('tb_places_plan')
export class TbPlacesPlan {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'province_id', nullable: true })
  provinceId: string | null;

  @Column('bigint', { name: 'node_at' })
  nodeAt: string;

  @Column('bigint', { name: 'school_year_at' })
  schoolYearAt: string;

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
    () => RPlacesPlanCareer,
    (rPlacesPlanCareer) => rPlacesPlanCareer.placesPlan,
  )
  rPlacesPlanCareers: RPlacesPlanCareer[];

  @OneToMany(
    () => RPlacesPlanCareerConvocation,
    (rPlacesPlanCareerConvocation) => rPlacesPlanCareerConvocation.placesPlan,
  )
  rPlacesPlanCareerConvocations: RPlacesPlanCareerConvocation[];

  @OneToMany(
    () => RPlacesPlanCareerProsecution,
    (rPlacesPlanCareerProsecution) => rPlacesPlanCareerProsecution.placesPlan,
  )
  rPlacesPlanCareerProsecutions: RPlacesPlanCareerProsecution[];

  @OneToMany(
    () => RPlacesPlanCareerProsecutionPreassignment,
    (rPlacesPlanCareerProsecutionPreassignment) =>
      rPlacesPlanCareerProsecutionPreassignment.placesPlan,
  )
  rPlacesPlanCareerProsecutionPreassignments: RPlacesPlanCareerProsecutionPreassignment[];

  @ManyToOne(() => TbProvince, (tbProvince) => tbProvince.tbPlacesPlans)
  @JoinColumn([{ name: 'province_id', referencedColumnName: 'id' }])
  province: TbProvince;
}
