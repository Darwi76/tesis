import { Column, Entity, Index } from "typeorm";

@Index("trigger_router_mirro_pkey", ["id"], { unique: true })
@Entity("trigger_router_mirro", { schema: "public" })
export class TriggerRouterMirro {
  @Column("character varying", { primary: true, name: "id", length: 50 })
  id: string;

  @Column("character varying", { name: "trigger_id", length: 50 })
  triggerId: string;

  @Column("character varying", { name: "router_id", length: 50 })
  routerId: string;

  @Column("smallint", { name: "enabled" })
  enabled: number;

  @Column("integer", { name: "initial_load_order" })
  initialLoadOrder: number;

  @Column("text", { name: "initial_load_select", nullable: true })
  initialLoadSelect: string | null;

  @Column("text", { name: "initial_load_delete_stmt", nullable: true })
  initialLoadDeleteStmt: string | null;

  @Column("integer", { name: "initial_load_batch_count", nullable: true })
  initialLoadBatchCount: number | null;

  @Column("smallint", { name: "ping_back_enabled" })
  pingBackEnabled: number;

  @Column("timestamp without time zone", { name: "create_time" })
  createTime: Date;

  @Column("character varying", {
    name: "last_update_by",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  lastUpdateBy: string | null;

  @Column("timestamp without time zone", { name: "last_update_time" })
  lastUpdateTime: Date;
}
