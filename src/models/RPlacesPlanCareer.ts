import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TbCes } from './TbCes';
import { TbPlacesPlan } from './TbPlacesPlan';

@Index('idx_4182c162b25b6c84', ['career'], {})
@Index('idx_4182c1628efa373a', ['cesId'], {})
@Index('idx_4182c162708a0e0', ['genderId'], {})
@Index('r_places_plan_career_pkey', ['id'], { unique: true })
@Index('idx_4182c162d2a7b295', ['incomeSourceId'], {})
@Index('idx_4182c1622d6d889b', ['modalityId'], {})
@Index('idx_4182c162936305bb', ['nodeAt'], {})
@Index('idx_4182c162d24f75d2', ['placesPlanId'], {})
@Index('idx_4182c1627805653', ['schoolYearAt'], {})
@Entity('r_places_plan_career')
export class RPlacesPlanCareer {
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

  @Column('integer', { name: 'capacity' })
  capacity: number;

  @Column('integer', { name: 'demand' })
  demand: number;

  @Column('integer', { name: 'incomerequired' })
  incomerequired: number;

  @Column('text', { name: 'cut_average', nullable: true })
  cutAverage: string | null;

  @Column('integer', { name: 'total_granted_sies', nullable: true })
  totalGrantedSies: number | null;

  @Column('integer', { name: 'total_granted_preselection', nullable: true })
  totalGrantedPreselection: number | null;

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

  @Column('integer', { name: 'extra', nullable: true })
  extra: number | null;

  @ManyToOne(() => TbCes, (tbCes) => tbCes.rPlacesPlanCareers)
  @JoinColumn([{ name: 'ces_id', referencedColumnName: 'id' }])
  ces: TbCes;

  @ManyToOne(
    () => TbPlacesPlan,
    (tbPlacesPlan) => tbPlacesPlan.rPlacesPlanCareers,
  )
  @JoinColumn([{ name: 'places_plan_id', referencedColumnName: 'id' }])
  placesPlan: TbPlacesPlan;
}
