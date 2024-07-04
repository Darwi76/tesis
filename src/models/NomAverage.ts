import { Column, Entity, Index } from "typeorm";

@Index("nom_average_pkey", ["id"], { unique: true })
@Index("idx_2eac7b27936305bb", ["nodeAt"], {})
@Index("idx_2eac7b277805653", ["schoolYearAt"], {})
@Entity("nom_average", { schema: "public" })
export class NomAverage {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "description", length: 255 })
  description: string;

  @Column("character varying", { name: "average", length: 255 })
  average: string;

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
