import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TbOfficialSies } from "./TbOfficialSies";
import { TbStudentSies } from "./TbStudentSies";

@Index("tb_student_official_sies_pkey", ["id"], { unique: true })
@Index("idx_cdf90547936305bb", ["nodeAt"], {})
@Index("idx_cdf905476cce2e55", ["officialsiesId"], {})
@Index("idx_cdf905477805653", ["schoolYearAt"], {})
@Index("idx_cdf90547a823a4", ["studentsiesId"], {})
@Entity("tb_student_official_sies", { schema: "public" })
export class TbStudentOfficialSies {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

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

  @Column("bigint", { name: "studentsies_id", nullable: true })
  studentsiesId: string | null;

  @Column("bigint", { name: "officialsies_id", nullable: true })
  officialsiesId: string | null;

  @ManyToOne(
    () => TbOfficialSies,
    (tbOfficialSies) => tbOfficialSies.tbStudentOfficialSies
  )
  @JoinColumn([{ name: "officialsies_id", referencedColumnName: "id" }])
  officialsies: TbOfficialSies;

  @ManyToOne(
    () => TbStudentSies,
    (tbStudentSies) => tbStudentSies.tbStudentOfficialSies
  )
  @JoinColumn([{ name: "studentsies_id", referencedColumnName: "id" }])
  studentsies: TbStudentSies;
}
