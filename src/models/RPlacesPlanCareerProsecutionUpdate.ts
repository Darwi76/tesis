import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { RPlacesPlanCareerProsecution } from './RPlacesPlanCareerProsecution';

@Index('idx_cafbc61cf54384de', ['commissionAt'], {})
@Index('idx_cafbc61c3d1af509', ['convocationAt'], {})
@Index('r_places_plan_career_prosecution_update_pkey', ['id'], { unique: true })
@Index('idx_cafbc61c936305bb', ['nodeAt'], {})
@Index('idx_cafbc61cd1c3652f', ['prosecutionAt'], {})
@Index('idx_cafbc61c8598b7dd', ['rPlacesPlanCarrerProsecutionId'], {})
@Index('idx_cafbc61c7805653', ['schoolYearAt'], {})
@Index('idx_cafbc61ca76ed395', ['userId'], {})
@Entity('r_places_plan_career_prosecution_update')
export class RPlacesPlanCareerProsecutionUpdate {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'user_id', nullable: true })
  userId: string | null;

  @Column('bigint', {
    name: 'r_places_plan_carrer_prosecution_id',
    nullable: true,
  })
  rPlacesPlanCarrerProsecutionId: string | null;

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

  @Column('integer', { name: 'initial_capacity' })
  initialCapacity: number;

  @Column('integer', { name: 'final_capacity' })
  finalCapacity: number;

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
    () => RPlacesPlanCareerProsecution,
    (rPlacesPlanCareerProsecution) =>
      rPlacesPlanCareerProsecution.rPlacesPlanCareerProsecutionUpdates,
  )
  @JoinColumn([
    { name: 'r_places_plan_carrer_prosecution_id', referencedColumnName: 'id' },
  ])
  rPlacesPlanCarrerProsecution: RPlacesPlanCareerProsecution;
}
