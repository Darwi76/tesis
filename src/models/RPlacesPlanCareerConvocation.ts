import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TbCes } from './TbCes';
import { TbPlacesPlan } from './TbPlacesPlan';
import { RPlacesPlanCareerProsecution } from './RPlacesPlanCareerProsecution';

@Index('idx_11d142feb25b6c84', ['career'], {})
@Index('idx_11d142fe8efa373a', ['cesId'], {})
@Index('idx_11d142fef54384de', ['commissionAt'], {})
@Index('idx_11d142fe3d1af509', ['convocationAt'], {})
@Index('idx_11d142fe708a0e0', ['genderId'], {})
@Index('r_places_plan_career_convocation_pkey', ['id'], { unique: true })
@Index('idx_11d142fed2a7b295', ['incomeSourceId'], {})
@Index('idx_11d142fe2d6d889b', ['modalityId'], {})
@Index('idx_11d142fe936305bb', ['nodeAt'], {})
@Index('idx_11d142fed24f75d2', ['placesPlanId'], {})
@Index('idx_11d142fe7805653', ['schoolYearAt'], {})
@Entity('r_places_plan_career_convocation')
export class RPlacesPlanCareerConvocation {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'places_plan_id', nullable: true })
  placesPlanId: string | null;

  @Column('bigint', { name: 'career', nullable: true })
  career: string | null;

  @Column('bigint', { name: 'income_source_id', nullable: true })
  incomeSourceId: string | null;

  @Column('bigint', { name: 'gender_id', nullable: true })
  genderId: string | null;

  @Column('bigint', { name: 'modality_id', nullable: true })
  modalityId: string | null;

  @Column('bigint', { name: 'ces_id', nullable: true })
  cesId: string | null;

  @Column('bigint', { name: 'node_at' })
  nodeAt: string;

  @Column('bigint', { name: 'school_year_at' })
  schoolYearAt: string;

  @Column('bigint', { name: 'commission_at' })
  commissionAt: string;

  @Column('bigint', { name: 'convocation_at' })
  convocationAt: string;

  @Column('integer', { name: 'capacity' })
  capacity: number;

  @Column('integer', { name: 'initial_capacity' })
  initialCapacity: number;

  @Column('integer', { name: 'demand' })
  demand: number;

  @Column('integer', { name: 'income_required' })
  incomeRequired: number;

  @Column('text', { name: 'cut_average', nullable: true })
  cutAverage: string | null;

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

  @ManyToOne(() => TbCes, (tbCes) => tbCes.rPlacesPlanCareerConvocations)
  @JoinColumn([{ name: 'ces_id', referencedColumnName: 'id' }])
  ces: TbCes;

  @ManyToOne(
    () => TbPlacesPlan,
    (tbPlacesPlan) => tbPlacesPlan.rPlacesPlanCareerConvocations,
  )
  @JoinColumn([{ name: 'places_plan_id', referencedColumnName: 'id' }])
  placesPlan: TbPlacesPlan;

  @OneToMany(
    () => RPlacesPlanCareerProsecution,
    (rPlacesPlanCareerProsecution) =>
      rPlacesPlanCareerProsecution.childRPlacesPlanCareerConvocation2,
  )
  rPlacesPlanCareerProsecutions: RPlacesPlanCareerProsecution[];
}
