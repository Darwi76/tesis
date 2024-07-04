import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { BosonPermiso } from "./BosonPermiso";
import { XalixRolUsuario } from "./XalixRolUsuario";

@Index("xalix_rol_pkey", ["id"], { unique: true })
@Index("idx_7906ff9a936305bb", ["nodeAt"], {})
@Index("uniq_7906ff9a3a909126", ["nombre"], { unique: true })
@Index("idx_7906ff9a613cec58", ["padreId"], {})
@Index("idx_7906ff9a166d77d", ["typeCommission"], {})
@Entity("xalix_rol", { schema: "public" })
export class XalixRol {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "type_commission", nullable: true })
  typeCommission: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "padre_id", nullable: true })
  padreId: string | null;

  @Column("character varying", { name: "nombre", length: 255 })
  nombre: string;

  @Column("integer", { name: "nivel", nullable: true })
  nivel: number | null;

  @Column("text", { name: "descripcion", nullable: true })
  descripcion: string | null;

  @Column("text", { name: "type" })
  type: string;

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

  @OneToMany(() => BosonPermiso, (bosonPermiso) => bosonPermiso.rol,
  {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },)
  bosonPermisos: BosonPermiso[];

  @ManyToOne(() => XalixRol, (xalixRol) => xalixRol.xalixRols)
  @JoinColumn([{ name: "padre_id", referencedColumnName: "id" }])
  padre: XalixRol;

  @OneToMany(() => XalixRol, (xalixRol) => xalixRol.padre)
  xalixRols: XalixRol[];

  @OneToMany(() => XalixRolUsuario, (xalixRolUsuario) => xalixRolUsuario.rol,
  {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },)
  xalixRolUsuarios: XalixRolUsuario[];
}
