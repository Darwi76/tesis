import { Column, Entity, Index, OneToMany } from "typeorm";
import { TbExpedientStudent } from "./TbExpedientStudent";

@Index("nom_military_service_pkey", ["id"], { unique: true })
@Index("idx_1d24ba00936305bb", ["nodeAt"], {})
@Entity("nom_military_service", { schema: "public" })
export class NomMilitaryService {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "type", length: 255 })
  type: string;

  @Column("character varying", { name: "short_name", length: 255 })
  shortName: string;

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
    () => TbExpedientStudent,
    (tbExpedientStudent) => tbExpedientStudent.militaryService
  )
  tbExpedientStudents: TbExpedientStudent[];
}
