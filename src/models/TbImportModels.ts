
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { XalixUser } from "./XalixUser";


@Index("idx_cb2fdf58f54384de", ["commissionAt"], {})
@Index("tb_import_models_pkey", ["id"], { unique: true })
@Index("idx_cb2fdf58936305bb", ["nodeAt"], {})
@Index("idx_cb2fdf587805653", ["schoolYearAt"], {})
@Index("idx_cb2fdf58a76ed395", ["userId"], {})
@Entity("tb_import_models", { schema: "public" })
export class TbImportModels {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "user_id", nullable: true })
  userId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("bigint", { name: "commission_at" })
  commissionAt: string;

  @Column("character varying", {
    name: "name",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  name: string | null;

  @Column("character varying", { name: "service_import_models", length: 255 })
  serviceImportModels: string;

  @Column("character varying", {
    name: "service_import_models_name",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  serviceImportModelsName: string | null;

  @Column("text", { name: "description" })
  description: string;

  @Column("character varying", { name: "model", length: 255 })
  model: string;

  @Column("text", { name: "content_file", nullable: true })
  contentFile: string | null;

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

  @ManyToOne(() => XalixUser, (xalixUser) => xalixUser.tbImportModels)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: XalixUser;
}
