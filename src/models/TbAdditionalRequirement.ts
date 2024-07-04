import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TbCes } from './TbCes';
import { TbStudent } from './TbStudent';

@Index('idx_7b554c85262d631f', ['careerTypeId'], {})
@Index('idx_7b554c858877c376', ['cesTypeId'], {})
@Index('idx_7b554c85f54384de', ['commissionAt'], {})
@Index('tb_additional_requirement_pkey', ['id'], { unique: true })
@Index('idx_7b554c85936305bb', ['nodeAt'], {})
@Index('idx_7b554c857805653', ['schoolYearAt'], {})
@Index('idx_7b554c85cb944f1a', ['studentId'], {})
@Entity('tb_additional_requirement')
export class TbAdditionalRequirement {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'career_type_id', nullable: true })
  careerTypeId: string | null;

  @Column('bigint', { name: 'ces_type_id', nullable: true })
  cesTypeId: string | null;

  @Column('bigint', { name: 'student_id', nullable: true })
  studentId: string | null;

  @Column('bigint', { name: 'node_at' })
  nodeAt: string;

  @Column('bigint', { name: 'school_year_at' })
  schoolYearAt: string;

  @Column('bigint', { name: 'commission_at' })
  commissionAt: string;

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

  @ManyToOne(() => TbCes, (tbCes) => tbCes.tbAdditionalRequirements)
  @JoinColumn([{ name: 'ces_type_id', referencedColumnName: 'id' }])
  cesType: TbCes;

  @ManyToOne(() => TbStudent, (tbStudent) => tbStudent.tbAdditionalRequirements)
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  student: TbStudent;
}
