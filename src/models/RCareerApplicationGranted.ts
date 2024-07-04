import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TbApplication } from './TbApplication';
import { RCareerApplication } from './RCareerApplication';
import { TbCes } from './TbCes';

@Index('idx_99ca6115a45bddc1', ['application'], {})
@Index('idx_99ca6115ab72046', ['assignmentResultType'], {})
@Index('idx_99ca6115e48faafb', ['careerApplication'], {})
@Index('idx_99ca61156456130f', ['ces'], {})
@Index('idx_99ca6115f54384de', ['commissionAt'], {})
@Index('idx_99ca61153d1af509', ['convocationAt'], {})
@Index('idx_99ca611574f57abf', ['finalAssigmment'], {})
@Index('r_career_application_granted_pkey', ['id'], { unique: true })
@Index('idx_99ca6115936305bb', ['nodeAt'], {})
@Index('idx_99ca6115d1c3652f', ['prosecutionAt'], {})
@Index('idx_99ca61157805653', ['schoolYearAt'], {})
@Entity('r_career_application_granted')
export class RCareerApplicationGranted {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'application', nullable: true })
  application: string | null;

  @Column('bigint', { name: 'career_application', nullable: true })
  careerApplication: string | null;

  @Column('bigint', { name: 'final_assigmment', nullable: true })
  finalAssigmment: string | null;

  @Column('bigint', { name: 'assignment_result_type', nullable: true })
  assignmentResultType: string | null;

  @Column('bigint', { name: 'ces', nullable: true })
  ces: string | null;

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
    (tbApplication) => tbApplication.rCareerApplicationGranteds,
  )
  @JoinColumn([{ name: 'application', referencedColumnName: 'id' }])
  application2: TbApplication;

  @ManyToOne(
    () => RCareerApplication,
    (rCareerApplication) => rCareerApplication.rCareerApplicationGranteds,
  )
  @JoinColumn([{ name: 'career_application', referencedColumnName: 'id' }])
  careerApplication2: RCareerApplication;

  @ManyToOne(() => TbCes, (tbCes) => tbCes.rCareerApplicationGranteds)
  @JoinColumn([{ name: 'ces', referencedColumnName: 'id' }])
  ces2: TbCes;
}
