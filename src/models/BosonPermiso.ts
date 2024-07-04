import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { BosonResourse } from "./BosonResourse";
import { XalixRol } from "./XalixRol";

@Index("boson_permiso_pkey", ["id"], { unique: true })
@Index("idx_4807e5de52b6c4e", ["recursoId"], {})
@Index("idx_4807e5d4bab96c", ["rolId"], {})
@Entity("boson_permiso", { schema: "public" })
export class BosonPermiso {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "recurso_id", nullable: true })
  recursoId: string | null;

  @Column("bigint", { name: "rol_id", nullable: true })
  rolId: string | null;

  @Column("integer", { name: "nivel_acceso" })
  nivelAcceso: number;

  @Column("bigint", { name: "entidad_id", nullable: true })
  entidadId: string | null;

  @Column("text", { name: "descripcion", nullable: true })
  descripcion: string | null;

  @Column("boolean", { name: "editable" })
  editable: boolean;

  @ManyToOne(
    () => BosonResourse,
    (bosonResourse) => bosonResourse.bosonPermisos
  )
  @JoinColumn([{ name: "recurso_id", referencedColumnName: "id" }])
  recurso: BosonResourse;

  @ManyToOne(() => XalixRol, (xalixRol) => xalixRol.bosonPermisos)
  @JoinColumn([{ name: "rol_id", referencedColumnName: "id" }])
  rol: XalixRol;
}
