import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TbExpedientStudent } from "./TbExpedientStudent";

@Index("idx_3ca0becd7096529a", ["assistanceId"], {})
@Index("idx_3ca0becdf54384de", ["commissionAt"], {})
@Index("idx_3ca0becddad0cfbf", ["examinationId"], {})
@Index("idx_3ca0becdf55438d5", ["expedientStudentId"], {})
@Index("r_note_expedient_student_pkey", ["id"], { unique: true })
@Index("idx_3ca0becd936305bb", ["nodeAt"], {})
@Index("idx_3ca0becddef03043", ["noteExpedientStudentComplianceId"], {})
@Index("idx_3ca0becd7805653", ["schoolYearAt"], {})
@Entity("r_note_expedient_student", { schema: "public" })
export class RNoteExpedientStudent {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "expedient_student_id", nullable: true })
  expedientStudentId: string | null;

  @Column("bigint", { name: "examination_id", nullable: true })
  examinationId: string | null;

  @Column("bigint", {
    name: "note_expedient_student_compliance_id",
    nullable: true,
  })
  noteExpedientStudentComplianceId: string | null;

  @Column("bigint", { name: "assistance_id", nullable: true })
  assistanceId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("bigint", { name: "commission_at" })
  commissionAt: string;

  @Column("text", { name: "note", nullable: true })
  note: string | null;

  @Column("boolean", { name: "discualified", nullable: true })
  discualified: boolean | null;

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

  @ManyToOne(
    () => TbExpedientStudent,
    (tbExpedientStudent) => tbExpedientStudent.rNoteExpedientStudents
  )
  @JoinColumn([{ name: "expedient_student_id", referencedColumnName: "id" }])
  expedientStudent: TbExpedientStudent;
}
