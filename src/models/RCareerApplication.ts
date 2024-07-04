import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TbApplication } from './TbApplication';
import { RCareerApplicationGranted } from './RCareerApplicationGranted';
import { RCareerApplicationPreGranted } from './RCareerApplicationPreGranted';

@Index('idx_5c2cd263e030acd', ['applicationId'], {})
@Index('idx_5c2cd26262d631f', ['careerTypeId'], {})
@Index('idx_5c2cd26f54384de', ['commissionAt'], {})
@Index('idx_5c2cd263d1af509', ['convocationAt'], {})
@Index('r_career_application_pkey', ['id'], { unique: true })
@Index('idx_5c2cd26936305bb', ['nodeAt'], {})
@Index('idx_5c2cd269823c574', ['nomModalityTypeId'], {})
@Index('idx_5c2cd26d1c3652f', ['prosecutionAt'], {})
@Index('idx_5c2cd267805653', ['schoolYearAt'], {})
@Entity('r_career_application')
export class RCareerApplication {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'application_id', nullable: true })
  applicationId: string | null;

  @Column('bigint', { name: 'career_type_id', nullable: true })
  careerTypeId: string | null;

  @Column('bigint', { name: 'nom_modality_type_id', nullable: true })
  nomModalityTypeId: string | null;

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

  @Column('bigint', { name: 'order_career', nullable: true })
  orderCareer: string | null;

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
    () => TbApplication,
    (tbApplication) => tbApplication.rCareerApplications,
  )
  @JoinColumn([{ name: 'application_id', referencedColumnName: 'id' }])
  application: TbApplication;

  @OneToMany(
    () => RCareerApplicationGranted,
    (rCareerApplicationGranted) => rCareerApplicationGranted.careerApplication2,
  )
  rCareerApplicationGranteds: RCareerApplicationGranted[];

  @OneToMany(
    () => RCareerApplicationPreGranted,
    (rCareerApplicationPreGranted) =>
      rCareerApplicationPreGranted.careerApplication2,
  )
  rCareerApplicationPreGranteds: RCareerApplicationPreGranted[];
}
