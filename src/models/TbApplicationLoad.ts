import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TbApplication } from './TbApplication';
import { TbStudent } from './TbStudent';

@Index('idx_25461cbaf54384de', ['commissionAt'], {})
@Index('idx_25461cba3d1af509', ['convocationAt'], {})
@Index('idx_25461cba5021582b', ['fromApplicationId'], {})
@Index('idx_25461cba5338a7ef', ['fromConvocationAt'], {})
@Index('idx_25461cbabfe137c9', ['fromProsecutionAt'], {})
@Index('tb_application_load_pkey', ['id'], { unique: true })
@Index('idx_25461cba936305bb', ['nodeAt'], {})
@Index('idx_25461cbad1c3652f', ['prosecutionAt'], {})
@Index('idx_25461cba7805653', ['schoolYearAt'], {})
@Index('idx_25461cbacb944f1a', ['studentId'], {})
@Index('idx_25461cba5c51a619', ['toApplicationId'], {})
@Entity('tb_application_load')
export class TbApplicationLoad {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'from_convocation_at' })
  fromConvocationAt: string;

  @Column('bigint', { name: 'from_prosecution_at' })
  fromProsecutionAt: string;

  @Column('bigint', { name: 'student_id', nullable: true })
  studentId: string | null;

  @Column('bigint', { name: 'from_application_id', nullable: true })
  fromApplicationId: string | null;

  @Column('bigint', { name: 'to_application_id', nullable: true })
  toApplicationId: string | null;

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
    (tbApplication) => tbApplication.tbApplicationLoads,
  )
  @JoinColumn([{ name: 'from_application_id', referencedColumnName: 'id' }])
  fromApplication: TbApplication;

  @ManyToOne(() => TbStudent, (tbStudent) => tbStudent.tbApplicationLoads)
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  student: TbStudent;

  @ManyToOne(
    () => TbApplication,
    (tbApplication) => tbApplication.tbApplicationLoads2,
  )
  @JoinColumn([{ name: 'to_application_id', referencedColumnName: 'id' }])
  toApplication: TbApplication;
}
