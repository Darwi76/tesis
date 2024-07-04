import { Column, Entity, Index, OneToMany } from "typeorm";
import { XalixConfig } from "./XalixConfig";

@Index("xalix_extension_pkey", ["id"], { unique: true })
@Entity("xalix_extension", { schema: "public" })
export class XalixExtension {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("integer", { name: "amount_used", nullable: true })
  amountUsed: number | null;

  @OneToMany(() => XalixConfig, (xalixConfig) => xalixConfig.extension)
  xalixConfigs: XalixConfig[];
}
