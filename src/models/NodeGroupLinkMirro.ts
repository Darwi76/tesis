import { Column, Entity, Index } from "typeorm";

@Index("node_group_link_mirro_pkey", ["nodegrouplinkid"], { unique: true })
@Index("idx_4d2b81c985951070", ["sourceNodeGroupId"], {})
@Index("idx_4d2b81c95c75f2a3", ["targetNodeGroupId"], {})
@Entity("node_group_link_mirro", { schema: "public" })
export class NodeGroupLinkMirro {
  @Column("character varying", {
    name: "source_node_group_id",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  sourceNodeGroupId: string | null;

  @Column("character varying", {
    name: "target_node_group_id",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  targetNodeGroupId: string | null;

  @Column("bigint", { primary: true, name: "nodegrouplinkid" })
  nodegrouplinkid: string;

  @Column("character varying", { name: "data_event_action", length: 255 })
  dataEventAction: string;

  @Column("smallint", { name: "sync_config_enabled" })
  syncConfigEnabled: number;

  @Column("timestamp without time zone", {
    name: "create_time",
    nullable: true,
    default: () => "NULL::timestamp without time zone",
  })
  createTime: Date | null;

  @Column("character varying", {
    name: "last_update_by",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  lastUpdateBy: string | null;

  @Column("timestamp without time zone", {
    name: "last_update_time",
    nullable: true,
    default: () => "NULL::timestamp without time zone",
  })
  lastUpdateTime: Date | null;
}
