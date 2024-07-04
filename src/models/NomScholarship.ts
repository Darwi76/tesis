import { Column, Entity, Index } from "typeorm";

@Index("nom_scholarship_pkey", ["id"], { unique: true })
@Index("idx_5b7387c936305bb", ["nodeAt"], {})
@Index("idx_5b7387c7805653", ["schoolYearAt"], {})
@Entity("nom_scholarship", { schema: "public" })
export class NomScholarship {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", {
    name: "code",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  code: string | null;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", {
    name: "short_name",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  shortName: string | null;

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
