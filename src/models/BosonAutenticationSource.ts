import { Column, Entity, Index, OneToMany } from "typeorm";
import { XalixUser } from "./XalixUser";

@Index("boson_autentication_source_pkey", ["id"], { unique: true })
@Entity("boson_autentication_source", { schema: "public" })
export class BosonAutenticationSource {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("character varying", { name: "nombrefuente", length: 40 })
  nombrefuente: string;

  @Column("character varying", { name: "descripcion", length: 255 })
  descripcion: string;

  @Column("boolean", { name: "habilitada" })
  habilitada: boolean;

  @OneToMany(() => XalixUser, (xalixUser) => xalixUser.fuenteAutenticacion)
  xalixUsers: XalixUser[];
}
