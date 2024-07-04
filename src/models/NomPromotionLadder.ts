import { Column, Entity, Index, OneToMany } from "typeorm";
import { NomIncomeSource } from "./NomIncomeSource";

@Index("nom_promotion_ladder_pkey", ["id"], { unique: true })
@Index("idx_1e3d2138936305bb", ["nodeAt"], {})
@Index("idx_1e3d21387805653", ["schoolYearAt"], {})
@Entity("nom_promotion_ladder", { schema: "public" })
export class NomPromotionLadder {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "servicepromotionladder", length: 255 })
  servicepromotionladder: string;

  @Column("text", { name: "description" })
  description: string;

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
    () => NomIncomeSource,
    (nomIncomeSource) => nomIncomeSource.promotionLadderType2
  )
  nomIncomeSources: NomIncomeSource[];
}
