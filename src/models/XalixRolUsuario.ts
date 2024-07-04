import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { XalixRol } from "./XalixRol";
import { XalixUser } from "./XalixUser";

@Index("xalix_rol_usuario_pkey", ["id"], { unique: true })
@Index("idx_58c0d28a936305bb", ["nodeAt"], {})
@Index("idx_58c0d28a4bab96c", ["rolId"], {})
@Index("idx_58c0d28a7805653", ["schoolYearAt"], {})
@Index("idx_58c0d28adb38439e", ["usuarioId"], {})
@Entity("xalix_rol_usuario", { schema: "public" })
export class XalixRolUsuario {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "rol_id", nullable: true })
  rolId: string | null;

  @Column("bigint", { name: "usuario_id", nullable: true })
  usuarioId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", {
    name: "deleted_at",
    nullable: true,
    default: () => "NULL::timestamp without time zone",
  })
  deletedAt: Date | null;

  @ManyToOne(() => XalixRol, (xalixRol) => xalixRol.xalixRolUsuarios)
  @JoinColumn([{ name: "rol_id", referencedColumnName: "id" }])
  rol: XalixRol;

  @ManyToOne(() => XalixUser, (xalixUser) => xalixUser.xalixRolUsuarios)
  @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
  usuario: XalixUser;
}
