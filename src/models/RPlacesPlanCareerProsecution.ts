import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TbCes } from './TbCes';
import { RPlacesPlanCareerConvocation } from './RPlacesPlanCareerConvocation';
import { TbPlacesPlan } from './TbPlacesPlan';
import { RPlacesPlanCareerProsecutionUpdate } from './RPlacesPlanCareerProsecutionUpdate';

@Index('idx_9a1e9e47b25b6c84', ['career'], {})
@Index('idx_9a1e9e478efa373a', ['cesId'], {})
@Index('idx_9a1e9e47f0714e22', ['childRPlacesPlanCareerConvocation'], {})
@Index('idx_9a1e9e47f54384de', ['commissionAt'], {})
@Index('idx_9a1e9e473d1af509', ['convocationAt'], {})
@Index('idx_9a1e9e4774f57abf', ['finalAssigmment'], {})
@Index('idx_9a1e9e47708a0e0', ['genderId'], {})
@Index('r_places_plan_career_prosecution_pkey', ['id'], { unique: true })
@Index('idx_9a1e9e47d2a7b295', ['incomeSourceId'], {})
@Index('idx_9a1e9e472d6d889b', ['modalityId'], {})
@Index('idx_9a1e9e47936305bb', ['nodeAt'], {})
@Index('idx_9a1e9e4751280b89', ['parentRPlacesPlanCareerProsecutionId'], {})
@Index('idx_9a1e9e47d24f75d2', ['placesPlanId'], {})
@Index('idx_9a1e9e47d1c3652f', ['prosecutionAt'], {})
@Index('idx_9a1e9e474adff43', ['prosecutionId'], {})
@Index('idx_9a1e9e477805653', ['schoolYearAt'], {})
@Entity('r_places_plan_career_prosecution')
export class RPlacesPlanCareerProsecution {
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

  @Column('bigint', { name: 'prosecution_id', nullable: true })
  prosecutionId: string | null;

  @Column('bigint', {
    name: 'parent_r_places_plan_career_prosecution_id',
    nullable: true,
  })
  parentRPlacesPlanCareerProsecutionId: string | null;

  @Column('bigint', { name: 'final_assigmment', nullable: true })
  finalAssigmment: string | null;

  @Column('bigint', {
    name: 'child_r_places_plan_career_convocation',
    nullable: true,
  })
  childRPlacesPlanCareerConvocation: string | null;

  @Column('bigint', { name: 'node_at' })
  nodeAt: string;

  @Column('bigint', { name: 'school_year_at' })
  schoolYearAt: string;

  @Column('bigint', { name: 'commission_at' })
  commissionAt: string;

  @Column('bigint', { name: 'convocation_at' })
  convocationAt: string;

  @Column('bigint', { name: 'prosecution_at' })
  prosecutionAt: string;

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

  @Column('integer', { name: 'extra', nullable: true })
  extra: number | null;

  @Column('boolean', { name: 'last' })
  last: boolean;

  @Column('integer', { name: 'total_career_granted', nullable: true })
  totalCareerGranted: number | null;

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

  @ManyToOne(() => TbCes, (tbCes) => tbCes.rPlacesPlanCareerProsecutions)
  @JoinColumn([{ name: 'ces_id', referencedColumnName: 'id' }])
  ces: TbCes;

  @ManyToOne(
    () => RPlacesPlanCareerConvocation,
    (rPlacesPlanCareerConvocation) =>
      rPlacesPlanCareerConvocation.rPlacesPlanCareerProsecutions,
  )
  @JoinColumn([
    {
      name: 'child_r_places_plan_career_convocation',
      referencedColumnName: 'id',
    },
  ])
  childRPlacesPlanCareerConvocation2: RPlacesPlanCareerConvocation;

  @ManyToOne(
    () => RPlacesPlanCareerProsecution,
    (rPlacesPlanCareerProsecution) =>
      rPlacesPlanCareerProsecution.rPlacesPlanCareerProsecutions,
  )
  @JoinColumn([
    {
      name: 'parent_r_places_plan_career_prosecution_id',
      referencedColumnName: 'id',
    },
  ])
  parentRPlacesPlanCareerProsecution: RPlacesPlanCareerProsecution;

  @OneToMany(
    () => RPlacesPlanCareerProsecution,
    (rPlacesPlanCareerProsecution) =>
      rPlacesPlanCareerProsecution.parentRPlacesPlanCareerProsecution,
  )
  rPlacesPlanCareerProsecutions: RPlacesPlanCareerProsecution[];

  @ManyToOne(
    () => TbPlacesPlan,
    (tbPlacesPlan) => tbPlacesPlan.rPlacesPlanCareerProsecutions,
  )
  @JoinColumn([{ name: 'places_plan_id', referencedColumnName: 'id' }])
  placesPlan: TbPlacesPlan;

  @OneToMany(
    () => RPlacesPlanCareerProsecutionUpdate,
    (rPlacesPlanCareerProsecutionUpdate) =>
      rPlacesPlanCareerProsecutionUpdate.rPlacesPlanCarrerProsecution,
  )
  rPlacesPlanCareerProsecutionUpdates: RPlacesPlanCareerProsecutionUpdate[];
}
