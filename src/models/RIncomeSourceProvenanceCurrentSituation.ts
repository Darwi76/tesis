import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { NomCurrentSituation } from "./NomCurrentSituation";
import { NomIncomeSource } from "./NomIncomeSource";
import { NomProvenance } from "./NomProvenance";

@Index("idx_c8cdf7efcbb95674", ["currentSituationId"], {})
@Index("r_income_source_provenance_current_situation_pkey", ["id"], {
  unique: true,
})
@Index("idx_c8cdf7efd2a7b295", ["incomeSourceId"], {})
@Index("idx_c8cdf7ef936305bb", ["nodeAt"], {})
@Index("idx_c8cdf7efc24afbdb", ["provenanceId"], {})
@Index("idx_c8cdf7ef7805653", ["schoolYearAt"], {})
@Entity("r_income_source_provenance_current_situation", {
  schema: "public",
})
export class RIncomeSourceProvenanceCurrentSituation {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "income_source_id", nullable: true })
  incomeSourceId: string | null;

  @Column("bigint", { name: "provenance_id", nullable: true })
  provenanceId: string | null;

  @Column("bigint", { name: "current_situation_id", nullable: true })
  currentSituationId: string | null;

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
    () => NomCurrentSituation,
    (nomCurrentSituation) =>
      nomCurrentSituation.rIncomeSourceProvenanceCurrentSituations
  )
  @JoinColumn([{ name: "current_situation_id", referencedColumnName: "id" }])
  currentSituation: NomCurrentSituation;

  @ManyToOne(
    () => NomIncomeSource,
    (nomIncomeSource) =>
      nomIncomeSource.rIncomeSourceProvenanceCurrentSituations
  )
  @JoinColumn([{ name: "income_source_id", referencedColumnName: "id" }])
  incomeSource: NomIncomeSource;

  @ManyToOne(
    () => NomProvenance,
    (nomProvenance) => nomProvenance.rIncomeSourceProvenanceCurrentSituations
  )
  @JoinColumn([{ name: "provenance_id", referencedColumnName: "id" }])
  provenance: NomProvenance;
}
