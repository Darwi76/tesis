import { Column, Entity, Index, OneToMany } from "typeorm";
import { TbStudentSies } from "./TbStudentSies";

@Index("nom_sies_pkey", ["id"], { unique: true })
@Index("idx_e0ceb74f936305bb", ["nodeAt"], {})
@Index("idx_e0ceb74f7805653", ["schoolYearAt"], {})
@Entity("nom_sies", { schema: "public" })
export class NomSies {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

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

  @OneToMany(() => TbStudentSies, (tbStudentSies) => tbStudentSies.type)
  tbStudentSies: TbStudentSies[];
}
