import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { NomIncomeSource } from "./NomIncomeSource";
import { NomPreuniversity } from "./NomPreuniversity";

@Index("r_income_source_nom_preuniversity_pkey", ["id"], { unique: true })
@Index("idx_48d55cced2a7b295", ["incomeSourceId"], {})
@Index("idx_48d55cce936305bb", ["nodeAt"], {})
@Index("idx_48d55ccecfe48378", ["nomPreuniversityId"], {})
@Index("idx_48d55cce7805653", ["schoolYearAt"], {})
@Entity("r_income_source_nom_preuniversity", { schema: "public" })
export class RIncomeSourceNomPreuniversity {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "income_source_id", nullable: true })
  incomeSourceId: string | null;

  @Column("bigint", { name: "nom_preuniversity_id", nullable: true })
  nomPreuniversityId: string | null;

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
    () => NomIncomeSource,
    (nomIncomeSource) => nomIncomeSource.rIncomeSourceNomPreuniversities
  )
  @JoinColumn([{ name: "income_source_id", referencedColumnName: "id" }])
  incomeSource: NomIncomeSource;

  @ManyToOne(
    () => NomPreuniversity,
    (nomPreuniversity) => nomPreuniversity.rIncomeSourceNomPreuniversities
  )
  @JoinColumn([{ name: "nom_preuniversity_id", referencedColumnName: "id" }])
  nomPreuniversity: NomPreuniversity;
}
