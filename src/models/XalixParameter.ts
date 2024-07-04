import { Column, Entity, Index } from "typeorm";

@Index("xalix_parameter_pkey", ["id"], { unique: true })
@Entity("xalix_parameter", { schema: "public" })
export class XalixParameter {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", {
    name: "value",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  value: string | null;

  @Column("character varying", { name: "source", length: 255 })
  source: string;
}
