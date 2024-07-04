import { Column, Entity, Index, OneToMany } from "typeorm";
import { NomCareer } from "./NomCareer";

@Index("nom_science_area_pkey", ["id"], { unique: true })
@Index("idx_5e7bd6b1936305bb", ["nodeAt"], {})
@Index("idx_5e7bd6b17805653", ["schoolYearAt"], {})
@Entity("nom_science_area", { schema: "public" })
export class NomScienceArea {
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

  @OneToMany(() => NomCareer, (nomCareer) => nomCareer.scienceArea)
  nomCareers: NomCareer[];
}
