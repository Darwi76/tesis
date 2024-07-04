import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { NomExamination } from "./NomExamination";
import { NomIncomeSource } from "./NomIncomeSource";

@Index("idx_ded81b4059ae99ba", ["examinationTypeId"], {})
@Index("r_examination_type_income_source_pkey", ["id"], { unique: true })
@Index("idx_ded81b40d2a7b295", ["incomeSourceId"], {})
@Index("idx_ded81b40936305bb", ["nodeAt"], {})
@Index("idx_ded81b407805653", ["schoolYearAt"], {})
@Entity("r_examination_type_income_source", { schema: "public" })
export class RExaminationTypeIncomeSource {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "income_source_id", nullable: true })
  incomeSourceId: string | null;

  @Column("bigint", { name: "examination_type_id", nullable: true })
  examinationTypeId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("double precision", { name: "note", precision: 53 })
  note: number;

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
    () => NomExamination,
    (nomExamination) => nomExamination.rExaminationTypeIncomeSources
  )
  @JoinColumn([{ name: "examination_type_id", referencedColumnName: "id" }])
  examinationType: NomExamination;

  @ManyToOne(
    () => NomIncomeSource,
    (nomIncomeSource) => nomIncomeSource.rExaminationTypeIncomeSources
  )
  @JoinColumn([{ name: "income_source_id", referencedColumnName: "id" }])
  incomeSource: NomIncomeSource;
}
