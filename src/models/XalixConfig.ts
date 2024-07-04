import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { XalixExtension } from "./XalixExtension";
import { XalixPlugin } from "./XalixPlugin";

@Index("idx_3cb23638812d5eb", ["extensionId"], {})
@Index("xalix_config_pkey", ["id"], { unique: true })
@Index("idx_3cb23638727aca70", ["parentId"], {})
@Index("idx_3cb23638ec942bcf", ["pluginId"], {})
@Entity("xalix_config", { schema: "public" })
export class XalixConfig {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "parent_id", nullable: true })
  parentId: number | null;

  @Column("integer", { name: "extension_id", nullable: true })
  extensionId: number | null;

  @Column("bigint", { name: "plugin_id", nullable: true })
  pluginId: string | null;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", {
    name: "value",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  value: string | null;

  @Column("integer", { name: "amount_used", nullable: true })
  amountUsed: number | null;

  @ManyToOne(
    () => XalixExtension,
    (xalixExtension) => xalixExtension.xalixConfigs,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "extension_id", referencedColumnName: "id" }])
  extension: XalixExtension;

  @ManyToOne(() => XalixConfig, (xalixConfig) => xalixConfig.xalixConfigs, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "parent_id", referencedColumnName: "id" }])
  parent: XalixConfig;

  @OneToMany(() => XalixConfig, (xalixConfig) => xalixConfig.parent)
  xalixConfigs: XalixConfig[];

  @ManyToOne(() => XalixPlugin, (xalixPlugin) => xalixPlugin.xalixConfigs, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "plugin_id", referencedColumnName: "id" }])
  plugin: XalixPlugin;
}
