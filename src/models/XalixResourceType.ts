import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { XalixMenuAction } from "./XalixMenuAction";
import { XalixPlugin } from "./XalixPlugin";

@Index("xalix_resource_type_pkey", ["id"], { unique: true })
@Index("uniq_95f96f3a5e237e06", ["name"], { unique: true })
@Index("idx_95f96f3aec942bcf", ["pluginId"], {})
@Entity("xalix_resource_type", { schema: "public" })
export class XalixResourceType {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "plugin_id", nullable: true })
  pluginId: string | null;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("boolean", { name: "is_exportable" })
  isExportable: boolean;

  @Column("integer", { name: "defaultmask" })
  defaultmask: number;

  @OneToMany(
    () => XalixMenuAction,
    (xalixMenuAction) => xalixMenuAction.resourceType
  )
  xalixMenuActions: XalixMenuAction[];

  @ManyToOne(
    () => XalixPlugin,
    (xalixPlugin) => xalixPlugin.xalixResourceTypes,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "plugin_id", referencedColumnName: "id" }])
  plugin: XalixPlugin;
}
