import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TbProsecution } from "./TbProsecution";
import { TbStudentOfficialSies } from "./TbStudentOfficialSies";

@Index("idx_a985ba03f54384de", ["commissionAt"], {})
@Index("idx_a985ba033d1af509", ["convocationAt"], {})
@Index("tb_official_sies_pkey", ["id"], { unique: true })
@Index("idx_a985ba03936305bb", ["nodeAt"], {})
@Index("idx_a985ba03d1c3652f", ["prosecutionAt"], {})
@Index("idx_a985ba037805653", ["schoolYearAt"], {})
@Entity("tb_official_sies", { schema: "public" })
export class TbOfficialSies {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("bigint", { name: "commission_at" })
  commissionAt: string;

  @Column("bigint", { name: "convocation_at" })
  convocationAt: string;

  @Column("bigint", { name: "prosecution_at" })
  prosecutionAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "lastname", length: 255 })
  lastname: string;

  @Column("character varying", { name: "position", length: 255 })
  position: string;

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

  @ManyToOne(
    () => TbProsecution,
    (tbProsecution) => tbProsecution.tbOfficialSies
  )
  @JoinColumn([{ name: "prosecution_at", referencedColumnName: "id" }])
  prosecutionAt2: TbProsecution;

  @OneToMany(
    () => TbStudentOfficialSies,
    (tbStudentOfficialSies) => tbStudentOfficialSies.officialsies
  )
  tbStudentOfficialSies: TbStudentOfficialSies[];
}
