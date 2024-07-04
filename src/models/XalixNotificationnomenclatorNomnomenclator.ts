import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { XalixNomenclator } from "./XalixNomenclator";

@Index("idx_e83c015d8aca150", ["nomnomenclatorId"], {})
@Index(
  "xalix_notificationnomenclator_nomnomenclator_pkey",
  ["nomnomenclatorId", "notificationnomenclatorId"],
  { unique: true }
)
@Index("idx_e83c015240d107", ["notificationnomenclatorId"], {})
@Entity("xalix_notificationnomenclator_nomnomenclator", { schema: "public" })
export class XalixNotificationnomenclatorNomnomenclator {
  @Column("bigint", { primary: true, name: "notificationnomenclator_id" })
  notificationnomenclatorId: string;

  @Column("bigint", { primary: true, name: "nomnomenclator_id" })
  nomnomenclatorId: string;

  @ManyToOne(
    () => XalixNomenclator,
    (xalixNomenclator) =>
      xalixNomenclator.xalixNotificationnomenclatorNomnomenclators
  )
  @JoinColumn([{ name: "nomnomenclator_id", referencedColumnName: "id" }])
  nomnomenclator: XalixNomenclator;
}
