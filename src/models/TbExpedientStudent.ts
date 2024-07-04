import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { RNoteExpedientStudent } from "./RNoteExpedientStudent";
import { TbAssignmentResultType } from "./TbAssignmentResultType";
import { NomMilitaryService } from "./NomMilitaryService";

@Index("idx_1f2a0287ab72046", ["assignmentResultType"], {})
@Index("idx_1f2a0287b58cda09", ["careerId"], {})
@Index("idx_1f2a02878efa373a", ["cesId"], {})
@Index("idx_1f2a0287f54384de", ["commissionAt"], {})
@Index("idx_1f2a0287f1fc57d7", ["expedientStudentComplianceId"], {})
@Index("idx_1f2a02873d1d26c4", ["grantResultType"], {})
@Index("tb_expedient_student_pkey", ["id"], { unique: true })
@Index("idx_1f2a02878089e49f", ["militaryServiceId"], {})
@Index("idx_1f2a02872d6d889b", ["modalityId"], {})
@Index("idx_1f2a0287936305bb", ["nodeAt"], {})
@Index("uniq_1f2a028716c821ac", ["rcareerApplicationGrantedId"], {
  unique: true,
})
@Index("idx_1f2a02877805653", ["schoolYearAt"], {})
@Index("uniq_1f2a0287cb944f1a", ["studentId"], { unique: true })
@Entity("tb_expedient_student", { schema: "public" })
export class TbExpedientStudent {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "student_id", nullable: true })
  studentId: string | null;

  @Column("bigint", { name: "career_id", nullable: true })
  careerId: string | null;

  @Column("bigint", { name: "ces_id", nullable: true })
  cesId: string | null;

  @Column("bigint", { name: "modality_id", nullable: true })
  modalityId: string | null;

  @Column("bigint", { name: "assignment_result_type", nullable: true })
  assignmentResultType: string | null;

  @Column("bigint", { name: "rcareer_application_granted_id", nullable: true })
  rcareerApplicationGrantedId: string | null;

  @Column("bigint", { name: "expedient_student_compliance_id", nullable: true })
  expedientStudentComplianceId: string | null;

  @Column("bigint", { name: "military_service_id", nullable: true })
  militaryServiceId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("bigint", { name: "commission_at" })
  commissionAt: string;

  @Column("text", { name: "average", nullable: true })
  average: string | null;

  @Column("integer", { name: "order_career", nullable: true })
  orderCareer: number | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", {
    name: "deleted_at",
    nullable: true,
    default: () => "NULL::timestamp without time zone",
  })
  deletedAt: Date | null;

  @Column("bigint", { name: "grant_result_type", nullable: true })
  grantResultType: string | null;

  @OneToMany(
    () => RNoteExpedientStudent,
    (rNoteExpedientStudent) => rNoteExpedientStudent.expedientStudent
  )
  rNoteExpedientStudents: RNoteExpedientStudent[];

  @ManyToOne(
    () => TbAssignmentResultType,
    (tbAssignmentResultType) => tbAssignmentResultType.tbExpedientStudents
  )
  @JoinColumn([{ name: "assignment_result_type", referencedColumnName: "id" }])
  assignmentResultType2: TbAssignmentResultType;

  @ManyToOne(
    () => NomMilitaryService,
    (nomMilitaryService) => nomMilitaryService.tbExpedientStudents
  )
  @JoinColumn([{ name: "military_service_id", referencedColumnName: "id" }])
  militaryService: NomMilitaryService;
}
