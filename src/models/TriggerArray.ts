import { Column, Entity, Index } from "typeorm";

@Index("trigger_array_pkey", ["triggerId"], { unique: true })
@Entity("trigger_array", { schema: "public" })
export class TriggerArray {
  @Column("character varying", {
    primary: true,
    name: "trigger_id",
    length: 128,
  })
  triggerId: string;

  @Column("character varying", {
    name: "source_catalog_name",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  sourceCatalogName: string | null;

  @Column("character varying", {
    name: "source_schema_name",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  sourceSchemaName: string | null;

  @Column("text", { name: "source_table_name" })
  sourceTableName: string;

  @Column("character varying", { name: "channel_id", length: 128 })
  channelId: string;

  @Column("character varying", { name: "reload_channel_id", length: 128 })
  reloadChannelId: string;

  @Column("smallint", { name: "sync_on_update" })
  syncOnUpdate: number;

  @Column("smallint", { name: "sync_on_insert" })
  syncOnInsert: number;

  @Column("smallint", { name: "sync_on_delete" })
  syncOnDelete: number;

  @Column("smallint", { name: "sync_on_incoming_batch" })
  syncOnIncomingBatch: number;

  @Column("character varying", {
    name: "name_for_update_trigger",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  nameForUpdateTrigger: string | null;

  @Column("character varying", {
    name: "name_for_insert_trigger",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  nameForInsertTrigger: string | null;

  @Column("character varying", {
    name: "name_for_delete_trigger",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  nameForDeleteTrigger: string | null;

  @Column("text", { name: "sync_on_update_condition", nullable: true })
  syncOnUpdateCondition: string | null;

  @Column("text", { name: "sync_on_insert_condition", nullable: true })
  syncOnInsertCondition: string | null;

  @Column("text", { name: "sync_on_delete_condition", nullable: true })
  syncOnDeleteCondition: string | null;

  @Column("text", { name: "custom_on_update_text", nullable: true })
  customOnUpdateText: string | null;

  @Column("text", { name: "custom_on_insert_text", nullable: true })
  customOnInsertText: string | null;

  @Column("text", { name: "custom_on_delete_text", nullable: true })
  customOnDeleteText: string | null;

  @Column("text", { name: "external_select", nullable: true })
  externalSelect: string | null;

  @Column("text", { name: "tx_id_expression", nullable: true })
  txIdExpression: string | null;

  @Column("text", { name: "channel_expression", nullable: true })
  channelExpression: string | null;

  @Column("text", { name: "excluded_column_names", nullable: true })
  excludedColumnNames: string | null;

  @Column("text", { name: "sync_key_names", nullable: true })
  syncKeyNames: string | null;

  @Column("smallint", { name: "use_stream_lobs" })
  useStreamLobs: number;

  @Column("smallint", { name: "use_capture_lobs" })
  useCaptureLobs: number;

  @Column("smallint", { name: "use_capture_old_data" })
  useCaptureOldData: number;

  @Column("smallint", { name: "use_handle_key_updates" })
  useHandleKeyUpdates: number;

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
