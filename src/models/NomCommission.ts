import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TbNode } from "./TbNode";
import { TbCommission } from "./TbCommission";

@Index("nom_commission_pkey", ["id"], { unique: true })
@Index("idx_29129397936305bb", ["nodeAt"], {})
@Entity("nom_commission", { schema: "public" })
export class NomCommission {
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

  @ManyToOne(() => TbNode, (tbNode) => tbNode.nomCommissions)
  @JoinColumn([{ name: "node_at", referencedColumnName: "id" }])
  nodeAt2: TbNode;

  @OneToMany(() => TbCommission, (tbCommission) => tbCommission.type)
  tbCommissions: TbCommission[];
}
