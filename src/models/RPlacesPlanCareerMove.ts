import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TbProsecution } from "./TbProsecution";

@Index("idx_b54b7b20f54384de", ["commissionAt"], {})
@Index("idx_b54b7b203d1af509", ["convocationAt"], {})
@Index("r_places_plan_career_move_pkey", ["id"], { unique: true })
@Index("idx_b54b7b20936305bb", ["nodeAt"], {})
@Index("idx_b54b7b20d1c3652f", ["prosecutionAt"], {})
@Index("idx_b54b7b20ce88c31e", ["rPlacesPlanCareerMoveDestinyId"], {})
@Index("idx_b54b7b20225127e0", ["rPlacesPlanCareerMoveId"], {})
@Index("idx_b54b7b207805653", ["schoolYearAt"], {})
@Index("idx_b54b7b20a76ed395", ["userId"], {})
@Entity("r_places_plan_career_move", { schema: "public" })
export class RPlacesPlanCareerMove {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "r_places_plan_career_move_id", nullable: true })
  rPlacesPlanCareerMoveId: string | null;

  @Column("bigint", {
    name: "r_places_plan_career_move_destiny_id",
    nullable: true,
  })
  rPlacesPlanCareerMoveDestinyId: string | null;

  @Column("bigint", { name: "user_id", nullable: true })
  userId: string | null;

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

  @Column("integer", { name: "initial_amount_source" })
  initialAmountSource: number;

  @Column("integer", { name: "final_amount_source" })
  finalAmountSource: number;

  @Column("integer", { name: "initial_amount_destiny" })
  initialAmountDestiny: number;

  @Column("integer", { name: "final_amount_destiny" })
  finalAmountDestiny: number;

  @Column("integer", { name: "amount_moved" })
  amountMoved: number;

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
    (tbProsecution) => tbProsecution.rPlacesPlanCareerMoves
  )
  @JoinColumn([{ name: "prosecution_at", referencedColumnName: "id" }])
  prosecutionAt2: TbProsecution;
}
