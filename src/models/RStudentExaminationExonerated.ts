import { Column, Entity, Index } from "typeorm";

@Index("idx_4d7d15aff54384de", ["commissionAt"], {})
@Index("idx_4d7d15af3d1af509", ["convocationAt"], {})
@Index("r_student_examination_exonerated_pkey", ["id"], { unique: true })
@Index("idx_4d7d15af936305bb", ["nodeAt"], {})
@Index("idx_4d7d15afcdeb2f46", ["nomExaminationId"], {})
@Index("idx_4d7d15afd1c3652f", ["prosecutionAt"], {})
@Index("idx_4d7d15af7805653", ["schoolYearAt"], {})
@Index("idx_4d7d15afcb944f1a", ["studentId"], {})
@Entity("r_student_examination_exonerated", { schema: "public" })
export class RStudentExaminationExonerated {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "nom_examination_id" })
  nomExaminationId: string;

  @Column("bigint", { name: "student_id" })
  studentId: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("bigint", { name: "commission_at" })
  commissionAt: string;

  @Column("bigint", { name: "convocation_at" })
  convocationAt: string;

  @Column("bigint", { name: "prosecution_at" })
  prosecutionAt: string;

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
}
