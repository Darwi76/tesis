import { Column, Entity, Index } from "typeorm";

@Index("tb_export_entity_pkey", ["id"], { unique: true })
@Index("idx_6dbe51ad936305bb", ["nodeAt"], {})
@Index("idx_6dbe51ad7805653", ["schoolYearAt"], {})
@Index("idx_6dbe51ada76ed395", ["userId"], {})
@Entity("tb_export_entity", { schema: "public" })
export class TbExportEntity {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "user_id", nullable: true })
  userId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", { name: "file_name", length: 255 })
  fileName: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 500,
    default: () => "NULL::character varying",
  })
  description: string | null;

  @Column("character varying", { name: "entities_info", length: 1024 })
  entitiesInfo: string;

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
