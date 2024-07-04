import { Column, Entity, Index, OneToMany } from "typeorm";
import { RIncomeSourceProvenanceCurrentSituation } from "./RIncomeSourceProvenanceCurrentSituation";

@Index("nom_current_situation_pkey", ["id"], { unique: true })
@Index("idx_c593118936305bb", ["nodeAt"], {})
@Index("idx_c5931187805653", ["schoolYearAt"], {})
@Entity("nom_current_situation", { schema: "public" })
export class NomCurrentSituation {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", { name: "code", length: 255 })
  code: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

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

  @OneToMany(
    () => RIncomeSourceProvenanceCurrentSituation,
    (rIncomeSourceProvenanceCurrentSituation) =>
      rIncomeSourceProvenanceCurrentSituation.currentSituation
  )
  rIncomeSourceProvenanceCurrentSituations: RIncomeSourceProvenanceCurrentSituation[];
}
