import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Index("xalix_menu_item_pkey", ["id"], { unique: true })
@Index("uniq_13c5e1225e237e06", ["name"], { unique: true })
@Index("idx_13c5e122727aca70", ["parentId"], {})
@Index("uri2_idx", ["uri"], {})
@Entity("xalix_menu_item", { schema: "public" })
export class XalixMenuItem {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "parent_id", nullable: true })
  parentId: string | null;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", {
    name: "label",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  label: string | null;

  @Column("character varying", {
    name: "uri",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  uri: string | null;

  @Column("character varying", {
    name: "route",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  route: string | null;

  @Column("text", { name: "data" })
  data: string;

  @Column("boolean", { name: "display" })
  display: boolean;

  @Column("boolean", { name: "displaychildren" })
  displaychildren: boolean;

  @Column("timestamp without time zone", { name: "created" })
  created: Date;

  @Column("timestamp without time zone", { name: "updated" })
  updated: Date;

  @ManyToOne(
    () => XalixMenuItem,
    (xalixMenuItem) => xalixMenuItem.xalixMenuItems,
    { onDelete: "SET NULL" }
  )
  @JoinColumn([{ name: "parent_id", referencedColumnName: "id" }])
  parent: XalixMenuItem;

  @OneToMany(() => XalixMenuItem, (xalixMenuItem) => xalixMenuItem.parent)
  xalixMenuItems: XalixMenuItem[];
}
