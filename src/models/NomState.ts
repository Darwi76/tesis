import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TbNode } from "./TbNode";
import { TbSchoolYear } from "./TbSchoolYear";

@Index("nom_state_pkey", ["id"], { unique: true })
@Index("idx_83493534936305bb", ["nodeAt"], {})
@Entity("nom_state", { schema: "public" })
export class NomState {
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

  @ManyToOne(() => TbNode, (tbNode) => tbNode.nomStates)
  @JoinColumn([{ name: "node_at", referencedColumnName: "id" }])
  nodeAt2: TbNode;

  @OneToMany(() => TbSchoolYear, (tbSchoolYear) => tbSchoolYear.state)
  tbSchoolYears: TbSchoolYear[];
}
