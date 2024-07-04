import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { XalixResourceType } from "./XalixResourceType";

@Index("xalix_menu_action_pkey", ["id"], { unique: true })
@Index("idx_a836ff1a98ec6b7b", ["resourceTypeId"], {})
@Entity("xalix_menu_action", { schema: "public" })
export class XalixMenuAction {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "resource_type_id", nullable: true })
  resourceTypeId: string | null;

  @Column("character varying", {
    name: "name",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  name: string | null;

  @Column("boolean", { name: "async", nullable: true })
  async: boolean | null;

  @Column("boolean", { name: "is_custom" })
  isCustom: boolean;

  @Column("boolean", { name: "is_form" })
  isForm: boolean;

  @Column("character varying", {
    name: "value",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  value: string | null;

  @ManyToOne(
    () => XalixResourceType,
    (xalixResourceType) => xalixResourceType.xalixMenuActions,
    { onDelete: "SET NULL" }
  )
  @JoinColumn([{ name: "resource_type_id", referencedColumnName: "id" }])
  resourceType: XalixResourceType;
}
