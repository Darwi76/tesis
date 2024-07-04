import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { RCareerApplication } from './RCareerApplication';
import { RCareerApplicationGranted } from './RCareerApplicationGranted';
import { RCareerApplicationPreGranted } from './RCareerApplicationPreGranted';
import { TbStudent } from './TbStudent';
import { TbApplicationInterchange } from './TbApplicationInterchange';
import { TbApplicationLoad } from './TbApplicationLoad';

@Index('idx_9c77c3acb8305782', ['applicationComplianceId'], {})
@Index('idx_9c77c3acab72046', ['assignmentResultType'], {})
@Index('idx_9c77c3acf54384de', ['commissionAt'], {})
@Index('idx_9c77c3ac3d1af509', ['convocationAt'], {})
@Index('tb_application_pkey', ['id'], { unique: true })
@Index('idx_9c77c3ac8089e49f', ['militaryServiceId'], {})
@Index('idx_9c77c3ac936305bb', ['nodeAt'], {})
@Index('idx_9c77c3acd1c3652f', ['prosecutionAt'], {})
@Index('idx_9c77c3ac7805653', ['schoolYearAt'], {})
@Index('idx_9c77c3accb944f1a', ['studentId'], {})
@Entity('tb_application')
export class TbApplication {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'student_id', nullable: true })
  studentId: string | null;

  @Column('bigint', { name: 'application_compliance_id', nullable: true })
  applicationComplianceId: string | null;

  @Column('bigint', { name: 'military_service_id', nullable: true })
  militaryServiceId: string | null;

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

  @Column('text', { name: 'average', nullable: true })
  average: string | null;

  @Column('boolean', { name: 'exclude_preassignment', default: () => 'false' })
  excludePreassignment: boolean;

  @Column('boolean', { name: 'exclude_assignment', default: () => 'false' })
  excludeAssignment: boolean;

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

  @Column('boolean', { name: 'special', default: () => 'false' })
  special: boolean;

  @OneToMany(
    () => RCareerApplication,
    (rCareerApplication) => rCareerApplication.application,
  )
  rCareerApplications: RCareerApplication[];

  @OneToMany(
    () => RCareerApplicationGranted,
    (rCareerApplicationGranted) => rCareerApplicationGranted.application2,
  )
  rCareerApplicationGranteds: RCareerApplicationGranted[];

  @OneToMany(
    () => RCareerApplicationPreGranted,
    (rCareerApplicationPreGranted) => rCareerApplicationPreGranted.application2,
  )
  rCareerApplicationPreGranteds: RCareerApplicationPreGranted[];

  @ManyToOne(() => TbStudent, (tbStudent) => tbStudent.tbApplications)
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  student: TbStudent;

  @OneToMany(
    () => TbApplicationInterchange,
    (tbApplicationInterchange) => tbApplicationInterchange.application,
  )
  tbApplicationInterchanges: TbApplicationInterchange[];

  @OneToMany(
    () => TbApplicationLoad,
    (tbApplicationLoad) => tbApplicationLoad.fromApplication,
  )
  tbApplicationLoads: TbApplicationLoad[];

  @OneToMany(
    () => TbApplicationLoad,
    (tbApplicationLoad) => tbApplicationLoad.toApplication,
  )
  tbApplicationLoads2: TbApplicationLoad[];
}
