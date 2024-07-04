import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { BosonFuncionalidad } from "./BosonFuncionalidad";
import { BosonPermiso } from "./BosonPermiso";

@Index("idx_f4c78f98f1fad9d3", ["bundleId"], {})
@Index("idx_f4c78f988cce72a9", ["controladorId"], {})
@Index("uniq_f4c78f982bed3563", ["firma"], { unique: true })
@Index("boson_resourse_pkey", ["id"], { unique: true })
@Entity("boson_resourse", { schema: "public" })
export class BosonResourse {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "bundle_id", nullable: true })
  bundleId: string | null;

  @Column("bigint", { name: "controlador_id", nullable: true })
  controladorId: string | null;

  @Column("character varying", { name: "firma", length: 255 })
  firma: string;

  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

  @Column("integer", { name: "tipo_recurso" })
  tipoRecurso: number;

  @Column("character varying", {
    name: "fqdn",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  fqdn: string | null;

  @Column("character varying", {
    name: "identificador_ruta",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  identificadorRuta: string | null;

  @Column("character varying", {
    name: "ruta",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  ruta: string | null;

  @OneToOne(
    () => BosonFuncionalidad,
    (bosonFuncionalidad) => bosonFuncionalidad.accion
  )
  bosonFuncionalidad: BosonFuncionalidad;

  @OneToMany(() => BosonPermiso, (bosonPermiso) => bosonPermiso.recurso)
  bosonPermisos: BosonPermiso[];

  @ManyToOne(
    () => BosonResourse,
    (bosonResourse) => bosonResourse.bosonResourses
  )
  @JoinColumn([{ name: "bundle_id", referencedColumnName: "id" }])
  bundle: BosonResourse;

  @OneToMany(() => BosonResourse, (bosonResourse) => bosonResourse.bundle)
  bosonResourses: BosonResourse[];

  @ManyToOne(
    () => BosonResourse,
    (bosonResourse) => bosonResourse.bosonResourses2
  )
  @JoinColumn([{ name: "controlador_id", referencedColumnName: "id" }])
  controlador: BosonResourse;

  @OneToMany(() => BosonResourse, (bosonResourse) => bosonResourse.controlador)
  bosonResourses2: BosonResourse[];
}
