import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TbStudentSies } from "./TbStudentSies";

@Index("idx_118b3770dad0cfbf", ["examinationId"], {})
@Index("r_student_examination_sies_pkey", ["id"], { unique: true })
@Index("idx_118b3770936305bb", ["nodeAt"], {})
@Index("idx_118b37707805653", ["schoolYearAt"], {})
@Index("idx_118b3770337915cf", ["studentSiesId"], {})
@Entity("r_student_examination_sies", { schema: "public" })
export class RStudentExaminationSies {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "examination_id", nullable: true })
  examinationId: string | null;

  @Column("bigint", { name: "student_sies_id", nullable: true })
  studentSiesId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("integer", { name: "note", nullable: true })
  note: number | null;

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
    () => TbStudentSies,
    (tbStudentSies) => tbStudentSies.rStudentExaminationSies
  )
  @JoinColumn([{ name: "student_sies_id", referencedColumnName: "id" }])
  studentSies: TbStudentSies;
}
