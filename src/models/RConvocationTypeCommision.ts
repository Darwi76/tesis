import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { NomConvocation } from "./NomConvocation";

@Index("idx_9ea48e8fa44a060", ["commisionId"], {})
@Index("r_convocation_type_commision_pkey", ["id"], { unique: true })
@Index("idx_9ea48e8f936305bb", ["nodeAt"], {})
@Index("idx_9ea48e8fff4f8f9c", ["nomConvocationId"], {})
@Index("idx_9ea48e8f7805653", ["schoolYearAt"], {})
@Index("idx_9ea48e8f5d83cc1", ["stateId"], {})
@Entity("r_convocation_type_commision", { schema: "public" })
export class RConvocationTypeCommision {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "nom_convocation_id" })
  nomConvocationId: string;

  @Column("bigint", { name: "commision_id" })
  commisionId: string;

  @Column("bigint", { name: "state_id", nullable: true })
  stateId: string | null;

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

  @ManyToOne(
    () => NomConvocation,
    (nomConvocation) => nomConvocation.rConvocationTypeCommisions,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "nom_convocation_id", referencedColumnName: "id" }])
  nomConvocation: NomConvocation;
}
