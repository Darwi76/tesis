import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TbApplication } from './TbApplication';
import { TbStudent } from './TbStudent';

@Index('idx_1328a1c83e030acd', ['applicationId'], {})
@Index('idx_1328a1c8f54384de', ['commissionAt'], {})
@Index('idx_1328a1c83d1af509', ['convocationAt'], {})
@Index('idx_1328a1c869791f25', ['fromCommissionId'], {})
@Index('tb_application_interchange_pkey', ['id'], { unique: true })
@Index('idx_1328a1c8936305bb', ['nodeAt'], {})
@Index('idx_1328a1c8d1c3652f', ['prosecutionAt'], {})
@Index('idx_1328a1c87805653', ['schoolYearAt'], {})
@Index('idx_1328a1c8cb944f1a', ['studentId'], {})
@Index('idx_1328a1c8af9c15ee', ['toCommissionId'], {})
@Index('idx_1328a1c8a76ed395', ['userId'], {})
@Entity('tb_application_interchange')
export class TbApplicationInterchange {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'application_id', nullable: true })
  applicationId: string | null;

  @Column('bigint', { name: 'from_commission_id', nullable: true })
  fromCommissionId: string | null;

  @Column('bigint', { name: 'to_commission_id', nullable: true })
  toCommissionId: string | null;

  @Column('bigint', { name: 'user_id', nullable: true })
  userId: string | null;

  @Column('bigint', { name: 'student_id', nullable: true })
  studentId: string | null;

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
    (tbApplication) => tbApplication.tbApplicationInterchanges,
  )
  @JoinColumn([{ name: 'application_id', referencedColumnName: 'id' }])
  application: TbApplication;

  @ManyToOne(
    () => TbStudent,
    (tbStudent) => tbStudent.tbApplicationInterchanges,
  )
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  student: TbStudent;
}
