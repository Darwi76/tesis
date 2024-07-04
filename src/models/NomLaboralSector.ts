import { Column, Entity, Index } from "typeorm";

@Index("nom_laboral_sector_pkey", ["id"], { unique: true })
@Index("idx_e3ed8631936305bb", ["nodeAt"], {})
@Index("idx_e3ed86317805653", ["schoolYearAt"], {})
@Entity("nom_laboral_sector", { schema: "public" })
export class NomLaboralSector {
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
}
