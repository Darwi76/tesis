import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TbCommission } from "./TbCommission";
import { TbNode } from "./TbNode";
import { TbSchoolYear } from "./TbSchoolYear";

@Index("idx_98a36416202d1eb2", ["commissionId"], {})
@Index("r_commission_type_prosecution_pkey", ["id"], { unique: true })
@Index("idx_98a36416936305bb", ["nodeAt"], {})
@Index("idx_98a364164adff43", ["prosecutionId"], {})
@Index("idx_98a364167805653", ["schoolYearAt"], {})
@Entity("r_commission_type_prosecution", { schema: "public" })
export class RCommissionTypeProsecution {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "commission_id", nullable: true })
  commissionId: string | null;

  @Column("bigint", { name: "prosecution_id", nullable: true })
  prosecutionId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("boolean", { name: "preparate_prosecution", default: () => "false" })
  preparateProsecution: boolean;

  @Column("boolean", {
    name: "assignment",
    nullable: true,
    default: () => "false",
  })
  assignment: boolean | null;

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
    () => TbCommission,
    (tbCommission) => tbCommission.rCommissionTypeProsecutions
  )
  @JoinColumn([{ name: "commission_id", referencedColumnName: "id" }])
  commission: TbCommission;

  @ManyToOne(() => TbNode, (tbNode) => tbNode.rCommissionTypeProsecutions)
  @JoinColumn([{ name: "node_at", referencedColumnName: "id" }])
  nodeAt2: TbNode;

  @ManyToOne(
    () => TbSchoolYear,
    (tbSchoolYear) => tbSchoolYear.rCommissionTypeProsecutions
  )
  @JoinColumn([{ name: "school_year_at", referencedColumnName: "id" }])
  schoolYearAt2: TbSchoolYear;
}
