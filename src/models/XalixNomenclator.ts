import { Column, Entity, Index, OneToMany } from "typeorm";
import { XalixNotificationnomenclatorNomnomenclator } from "./XalixNotificationnomenclatorNomnomenclator";

@Index("xalix_nomenclator_pkey", ["id"], { unique: true })
@Index("idx_c57457c1b4c3e37d", ["nomNomenclatorTypeId"], {})
@Entity("xalix_nomenclator", { schema: "public" })
export class XalixNomenclator {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "nom_nomenclator_type_id", nullable: true })
  nomNomenclatorTypeId: string | null;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "title", length: 255 })
  title: string;

  @OneToMany(
    () => XalixNotificationnomenclatorNomnomenclator,
    (xalixNotificationnomenclatorNomnomenclator) =>
      xalixNotificationnomenclatorNomnomenclator.nomnomenclator
  )
  xalixNotificationnomenclatorNomnomenclators: XalixNotificationnomenclatorNomnomenclator[];
}
