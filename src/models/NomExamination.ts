import { Column, Entity, Index, OneToMany } from "typeorm";
import { RExaminationTypeIncomeSource } from "./RExaminationTypeIncomeSource";

@Index("nom_examination_pkey", ["id"], { unique: true })
@Index("idx_c6524586936305bb", ["nodeAt"], {})
@Index("idx_c65245867805653", ["schoolYearAt"], {})
@Entity("nom_examination", { schema: "public" })
export class NomExamination {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "short_name", length: 255 })
  shortName: string;

  @Column("character varying", { name: "code", length: 255 })
  code: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("boolean", { name: "required" })
  required: boolean;

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
    () => RExaminationTypeIncomeSource,
    (rExaminationTypeIncomeSource) =>
      rExaminationTypeIncomeSource.examinationType
  )
  rExaminationTypeIncomeSources: RExaminationTypeIncomeSource[];
}
