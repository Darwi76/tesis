import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TbApplication } from './TbApplication';
import { RCareerApplication } from './RCareerApplication';
import { TbCes } from './TbCes';

@Index('idx_7e475f3aa45bddc1', ['application'], {})
@Index('idx_7e475f3aab72046', ['assignmentResultType'], {})
@Index('idx_7e475f3ae48faafb', ['careerApplication'], {})
@Index('idx_7e475f3a6456130f', ['ces'], {})
@Index('idx_7e475f3af54384de', ['commissionAt'], {})
@Index('idx_7e475f3a3d1af509', ['convocationAt'], {})
@Index('r_career_application_pre_granted_pkey', ['id'], { unique: true })
@Index('idx_7e475f3a936305bb', ['nodeAt'], {})
@Index('idx_7e475f3a2e2467ab', ['preAssigmment'], {})
@Index('idx_7e475f3ad1c3652f', ['prosecutionAt'], {})
@Index('idx_7e475f3a7805653', ['schoolYearAt'], {})
@Entity('r_career_application_pre_granted')
export class RCareerApplicationPreGranted {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'application', nullable: true })
  application: string | null;

  @Column('bigint', { name: 'career_application', nullable: true })
  careerApplication: string | null;

  @Column('bigint', { name: 'ces', nullable: true })
  ces: string | null;

  @Column('bigint', { name: 'pre_assigmment', nullable: true })
  preAssigmment: string | null;

  @Column('bigint', { name: 'assignment_result_type', nullable: true })
  assignmentResultType: string | null;

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
    (tbApplication) => tbApplication.rCareerApplicationPreGranteds,
  )
  @JoinColumn([{ name: 'application', referencedColumnName: 'id' }])
  application2: TbApplication;

  @ManyToOne(
    () => RCareerApplication,
    (rCareerApplication) => rCareerApplication.rCareerApplicationPreGranteds,
  )
  @JoinColumn([{ name: 'career_application', referencedColumnName: 'id' }])
  careerApplication2: RCareerApplication;

  @ManyToOne(() => TbCes, (tbCes) => tbCes.rCareerApplicationPreGranteds)
  @JoinColumn([{ name: 'ces', referencedColumnName: 'id' }])
  ces2: TbCes;
}
