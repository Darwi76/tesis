import { Column, Entity, Index, OneToMany } from "typeorm";
import { NomIncomeSource } from "./NomIncomeSource";

@Index("nom_income_source_province_assigment_type_pkey", ["id"], {
  unique: true,
})
@Index("idx_61c20e8d936305bb", ["nodeAt"], {})
@Entity("nom_income_source_province_assigment_type", { schema: "public" })
export class NomIncomeSourceProvinceAssigmentType {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "type", length: 255 })
  type: string;

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
    (nomIncomeSource) => nomIncomeSource.provinceAssigmentType2
  )
  nomIncomeSources: NomIncomeSource[];
}
