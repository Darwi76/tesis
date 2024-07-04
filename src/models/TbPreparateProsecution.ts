import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TbProsecution } from "./TbProsecution";

@Index("idx_68f2df57f54384de", ["commissionAt"], {})
@Index("idx_68f2df573d1af509", ["convocationAt"], {})
@Index("tb_preparate_prosecution_pkey", ["id"], { unique: true })
@Index("idx_68f2df57936305bb", ["nodeAt"], {})
@Index("idx_68f2df57d1c3652f", ["prosecutionAt"], {})
@Index("idx_68f2df577805653", ["schoolYearAt"], {})
@Entity("tb_preparate_prosecution", { schema: "public" })
export class TbPreparateProsecution {
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

  @Column("character varying", { name: "type", length: 255 })
  type: string;

  @Column("text", { name: "value" })
  value: string;

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
    (tbProsecution) => tbProsecution.tbPreparateProsecutions
  )
  @JoinColumn([{ name: "prosecution_at", referencedColumnName: "id" }])
  prosecutionAt2: TbProsecution;
}
