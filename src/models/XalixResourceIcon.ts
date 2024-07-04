import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Index("xalix_resource_icon_pkey", ["id"], { unique: true })
@Index("idx_7cb311c879f0d498", ["shortcutId"], {})
@Entity("xalix_resource_icon", { schema: "public" })
export class XalixResourceIcon {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "shortcut_id", nullable: true })
  shortcutId: string | null;

  @Column("character varying", { name: "mimetype", length: 255 })
  mimetype: string;

  @Column("boolean", { name: "is_shortcut" })
  isShortcut: boolean;

  @Column("character varying", {
    name: "relative_url",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  relativeUrl: string | null;

  @ManyToOne(
    () => XalixResourceIcon,
    (xalixResourceIcon) => xalixResourceIcon.xalixResourceIcons,
    { onDelete: "SET NULL" }
  )
  @JoinColumn([{ name: "shortcut_id", referencedColumnName: "id" }])
  shortcut: XalixResourceIcon;

  @OneToMany(
    () => XalixResourceIcon,
    (xalixResourceIcon) => xalixResourceIcon.shortcut
  )
  xalixResourceIcons: XalixResourceIcon[];
}
