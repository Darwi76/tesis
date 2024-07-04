import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { BosonResourse } from "./BosonResourse";

@Index("uniq_227f45363f4b5275", ["accionId"], { unique: true })
@Index("boson_funcionalidad_pkey", ["id"], { unique: true })
@Entity("boson_funcionalidad", { schema: "public" })
export class BosonFuncionalidad {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "accion_id", nullable: true })
  accionId: string | null;

  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

  @OneToOne(
    () => BosonResourse,
    (bosonResourse) => bosonResourse.bosonFuncionalidad
  )
  @JoinColumn([{ name: "accion_id", referencedColumnName: "id" }])
  accion: BosonResourse;
}
