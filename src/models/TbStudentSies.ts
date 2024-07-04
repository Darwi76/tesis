import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { RStudentExaminationSies } from "./RStudentExaminationSies";
import { TbStudentOfficialSies } from "./TbStudentOfficialSies";
import { TbProsecution } from "./TbProsecution";
import { NomSies } from "./NomSies";

@Index("idx_e1468a78b58cda09", ["careerId"], {})
@Index("idx_e1468a788efa373a", ["cesId"], {})
@Index("idx_e1468a78f54384de", ["commissionAt"], {})
@Index("idx_e1468a783d1af509", ["convocationAt"], {})
@Index("tb_student_sies_pkey", ["id"], { unique: true })
@Index("idx_e1468a78936305bb", ["nodeAt"], {})
@Index("idx_e1468a78d1c3652f", ["prosecutionAt"], {})
@Index("idx_e1468a787805653", ["schoolYearAt"], {})
@Index("idx_e1468a78cb944f1a", ["studentId"], {})
@Index("idx_e1468a78c54c8c93", ["typeId"], {})
@Entity("tb_student_sies", { schema: "public" })
export class TbStudentSies {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "career_id", nullable: true })
  careerId: string | null;

  @Column("bigint", { name: "student_id", nullable: true })
  studentId: string | null;

  @Column("bigint", { name: "type_id", nullable: true })
  typeId: string | null;

  @Column("bigint", { name: "ces_id", nullable: true })
  cesId: string | null;

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

  @Column("integer", { name: "no" })
  no: number;

  @Column("text", { name: "description" })
  description: string;

  @Column("boolean", {
    name: "studentship",
    nullable: true,
    default: () => "false",
  })
  studentship: boolean | null;

  @Column("integer", { name: "promotion_ladder", nullable: true })
  promotionLadder: number | null;

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

  @Column("text", { name: "condition", nullable: true })
  condition: string | null;

  @OneToMany(
    () => RStudentExaminationSies,
    (rStudentExaminationSies) => rStudentExaminationSies.studentSies
  )
  rStudentExaminationSies: RStudentExaminationSies[];

  @OneToMany(
    () => TbStudentOfficialSies,
    (tbStudentOfficialSies) => tbStudentOfficialSies.studentsies
  )
  tbStudentOfficialSies: TbStudentOfficialSies[];

  @ManyToOne(
    () => TbProsecution,
    (tbProsecution) => tbProsecution.tbStudentSies
  )
  @JoinColumn([{ name: "prosecution_at", referencedColumnName: "id" }])
  prosecutionAt2: TbProsecution;

  @ManyToOne(() => NomSies, (nomSies) => nomSies.tbStudentSies)
  @JoinColumn([{ name: "type_id", referencedColumnName: "id" }])
  type: NomSies;
}
