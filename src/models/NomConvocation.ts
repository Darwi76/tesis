import { Column, Entity, Index, OneToMany } from "typeorm";
import { RConvocationTypeCommision } from "./RConvocationTypeCommision";

@Index("nom_convocation_pkey", ["id"], { unique: true })
@Index("idx_cab3d11c936305bb", ["nodeAt"], {})
@Index("idx_cab3d11c7805653", ["schoolYearAt"], {})
@Index("idx_cab3d11c5d83cc1", ["stateId"], {})
@Entity("nom_convocation", { schema: "public" })
export class NomConvocation {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "state_id", nullable: true })
  stateId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("timestamp without time zone", { name: "begin_date" })
  beginDate: Date;

  @Column("timestamp without time zone", { name: "end_date" })
  endDate: Date;

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

  @OneToMany(
    () => RConvocationTypeCommision,
    (rConvocationTypeCommision) => rConvocationTypeCommision.nomConvocation
  )
  rConvocationTypeCommisions: RConvocationTypeCommision[];
}
