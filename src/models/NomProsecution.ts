import { Column, Entity, Index, JoinTable, ManyToMany } from "typeorm";
import { TbProsecution } from "./TbProsecution";

@Index("nom_prosecution_pkey", ["id"], { unique: true })
@Index("idx_f6d0f57b936305bb", ["nodeAt"], {})
@Entity("nom_prosecution", { schema: "public" })
export class NomProsecution {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

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

  @ManyToMany(
    () => TbProsecution,
    (tbProsecution) => tbProsecution.nomProsecutions
  )
  @JoinTable({
    name: "r_prosecution_nom_prosecution",
    joinColumns: [{ name: "nom_prosecution_id", referencedColumnName: "id" }],
    inverseJoinColumns: [
      { name: "prosecution_id", referencedColumnName: "id" },
    ],
    schema: "public",
  })
  tbProsecutions: TbProsecution[];
}
