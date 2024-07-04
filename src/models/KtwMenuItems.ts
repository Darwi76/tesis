import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Index("ktw_menu_items_pkey", ["id"], { unique: true })
@Index("uniq_40bf38d45e237e06", ["name"], { unique: true })
@Index("idx_40bf38d4727aca70", ["parentId"], {})
@Index("uri_idx", ["uri"], {})
@Entity("ktw_menu_items", { schema: "public" })
export class KtwMenuItems {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "parent_id", nullable: true })
  parentId: number | null;

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

  @ManyToOne(() => KtwMenuItems, (ktwMenuItems) => ktwMenuItems.ktwMenuItems, {
    onDelete: "SET NULL",
  })
  @JoinColumn([{ name: "parent_id", referencedColumnName: "id" }])
  parent: KtwMenuItems;

  @OneToMany(() => KtwMenuItems, (ktwMenuItems) => ktwMenuItems.parent)
  ktwMenuItems: KtwMenuItems[];
}
