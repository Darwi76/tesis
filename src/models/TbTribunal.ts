import { Column, Entity, Index } from "typeorm";

@Index("idx_a7385f76f54384de", ["commissionAt"], {})
@Index("idx_a7385f763d1af509", ["convocationAt"], {})
@Index("idx_a7385f76dad0cfbf", ["examinationId"], {})
@Index("tb_tribunal_pkey", ["id"], { unique: true })
@Index("idx_a7385f76936305bb", ["nodeAt"], {})
@Index("idx_a7385f76d1c3652f", ["prosecutionAt"], {})
@Index("idx_a7385f767805653", ["schoolYearAt"], {})
@Entity("tb_tribunal", { schema: "public" })
export class TbTribunal {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "examination_id", nullable: true })
  examinationId: string | null;

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

  @Column("character varying", { name: "president", length: 255 })
  president: string;

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
