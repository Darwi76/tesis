import { Column, Entity, Index, OneToMany } from "typeorm";
import { XalixConfig } from "./XalixConfig";
import { XalixResourceType } from "./XalixResourceType";

@Index("xalix_plugin_pkey", ["id"], { unique: true })
@Index("plugin_unique_name", ["shortName", "vendorName"], { unique: true })
@Entity("xalix_plugin", { schema: "public" })
export class XalixPlugin {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("character varying", { name: "vendor_name", length: 50 })
  vendorName: string;

  @Column("character varying", { name: "short_name", length: 50 })
  shortName: string;

  @Column("boolean", { name: "has_options" })
  hasOptions: boolean;

  @Column("boolean", { name: "enable" })
  enable: boolean;

  @Column("character varying", { name: "icon", length: 255 })
  icon: string;

  @Column("character varying", { name: "plugin_version", length: 5 })
  pluginVersion: string;

  @OneToMany(() => XalixConfig, (xalixConfig) => xalixConfig.plugin)
  xalixConfigs: XalixConfig[];

  @OneToMany(
    () => XalixResourceType,
    (xalixResourceType) => xalixResourceType.plugin
  )
  xalixResourceTypes: XalixResourceType[];
}
