import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { NomIncomeSourceFather } from "./NomIncomeSourceFather";
import { NomIncomeSource } from "./NomIncomeSource";

@Index("r_income_source_father_income_source_pkey", ["id"], { unique: true })
@Index("idx_aefa75b75bf932bd", ["incomeSourceFatherId"], {})
@Index("idx_aefa75b7d2a7b295", ["incomeSourceId"], {})
@Index("idx_aefa75b7936305bb", ["nodeAt"], {})
@Index("idx_aefa75b77805653", ["schoolYearAt"], {})
@Entity("r_income_source_father_income_source", { schema: "public" })
export class RIncomeSourceFatherIncomeSource {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "income_source_id", nullable: true })
  incomeSourceId: string | null;

  @Column("bigint", { name: "income_source_father_id", nullable: true })
  incomeSourceFatherId: string | null;

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

  @ManyToOne(
    () => NomIncomeSourceFather,
    (nomIncomeSourceFather) =>
      nomIncomeSourceFather.rIncomeSourceFatherIncomeSources
  )
  @JoinColumn([{ name: "income_source_father_id", referencedColumnName: "id" }])
  incomeSourceFather: NomIncomeSourceFather;

  @ManyToOne(
    () => NomIncomeSource,
    (nomIncomeSource) => nomIncomeSource.rIncomeSourceFatherIncomeSources
  )
  @JoinColumn([{ name: "income_source_id", referencedColumnName: "id" }])
  incomeSource: NomIncomeSource;
}
