import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TbProsecution } from "./TbProsecution";
import { TbPreassignmentStateType } from "./TbPreassignmentStateType";

@Index("idx_f0789c6bf54384de", ["commissionAt"], {})
@Index("idx_f0789c6b3d1af509", ["convocationAt"], {})
@Index("tb_assignment_pkey", ["id"], { unique: true })
@Index("idx_f0789c6b936305bb", ["nodeAt"], {})
@Index("idx_f0789c6bd1c3652f", ["prosecutionAt"], {})
@Index("idx_f0789c6b7805653", ["schoolYearAt"], {})
@Index("idx_f0789c6b183ddeef", ["stateType"], {})
@Entity("tb_assignment", { schema: "public" })
export class TbAssignment {
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

  @Column("bigint", { name: "state_type", nullable: true })
  stateType: string | null;

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

  @Column("character varying", { name: "type", length: 255 })
  type: string;

  @Column("character varying", {
    name: "name",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  name: string | null;

  @ManyToOne(
    () => TbProsecution,
    (tbProsecution) => tbProsecution.tbAssignments
  )
  @JoinColumn([{ name: "prosecution_at", referencedColumnName: "id" }])
  prosecutionAt2: TbProsecution;

  @ManyToOne(
    () => TbPreassignmentStateType,
    (tbPreassignmentStateType) => tbPreassignmentStateType.tbAssignments
  )
  @JoinColumn([{ name: "state_type", referencedColumnName: "id" }])
  stateType2: TbPreassignmentStateType;
}
