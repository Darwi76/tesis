import { Column, Entity, Index, OneToMany } from "typeorm";
import { TbAssignment } from "./TbAssignment";

@Index("tb_preassignment_state_type_pkey", ["id"], { unique: true })
@Index("idx_d5b8d8936305bb", ["nodeAt"], {})
@Entity("tb_preassignment_state_type", { schema: "public" })
export class TbPreassignmentStateType {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

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

  @OneToMany(() => TbAssignment, (tbAssignment) => tbAssignment.stateType2)
  tbAssignments: TbAssignment[];
}
