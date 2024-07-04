import { Column, Entity, Index, OneToMany } from "typeorm";
import { NomCareer } from "./NomCareer";

@Index("nom_career_type_pkey", ["id"], { unique: true })
@Index("idx_58ff9af3936305bb", ["nodeAt"], {})
@Entity("nom_career_type", { schema: "public" })
export class NomCareerType {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("character varying", {
    name: "code",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  code: string | null;

  @Column("character varying", {
    name: "name",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  name: string | null;

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

  @OneToMany(() => NomCareer, (nomCareer) => nomCareer.nomCareerType)
  nomCareers: NomCareer[];
}
