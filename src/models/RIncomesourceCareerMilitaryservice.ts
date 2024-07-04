import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { NomCareer } from "./NomCareer";
import { NomIncomeSource } from "./NomIncomeSource";

@Index("idx_a825ac9b58cda09", ["careerId"], {})
@Index("r_incomesource_career_militaryservice_pkey", ["id"], { unique: true })
@Index("idx_a825ac9d2a7b295", ["incomeSourceId"], {})
@Index("idx_a825ac9936305bb", ["nodeAt"], {})
@Index("idx_a825ac97805653", ["schoolYearAt"], {})
@Entity("r_incomesource_career_militaryservice", { schema: "public" })
export class RIncomesourceCareerMilitaryservice {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "income_source_id", nullable: true })
  incomeSourceId: string | null;

  @Column("bigint", { name: "career_id", nullable: true })
  careerId: string | null;

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
    () => NomCareer,
    (nomCareer) => nomCareer.rIncomesourceCareerMilitaryservices
  )
  @JoinColumn([{ name: "career_id", referencedColumnName: "id" }])
  career: NomCareer;

  @ManyToOne(
    () => NomIncomeSource,
    (nomIncomeSource) => nomIncomeSource.rIncomesourceCareerMilitaryservices
  )
  @JoinColumn([{ name: "income_source_id", referencedColumnName: "id" }])
  incomeSource: NomIncomeSource;
}
