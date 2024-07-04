import { Column, Entity, Index, OneToMany } from "typeorm";
import { RExaminationReportApplication } from "./RExaminationReportApplication";

@Index("idx_261fcba4f54384de", ["commissionAt"], {})
@Index("idx_261fcba43d1af509", ["convocationAt"], {})
@Index("idx_261fcba4e8746f65", ["convocationId"], {})
@Index("idx_261fcba4dad0cfbf", ["examinationId"], {})
@Index("tb_examination_report_pkey", ["id"], { unique: true })
@Index("idx_261fcba4d2a7b295", ["incomeSourceId"], {})
@Index("idx_261fcba4936305bb", ["nodeAt"], {})
@Index("idx_261fcba4aa902ccf", ["preuniversityId"], {})
@Index("idx_261fcba4d1c3652f", ["prosecutionAt"], {})
@Index("idx_261fcba47805653", ["schoolYearAt"], {})
@Entity("tb_examination_report", { schema: "public" })
export class TbExaminationReport {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "examination_id", nullable: true })
  examinationId: string | null;

  @Column("bigint", { name: "income_source_id", nullable: true })
  incomeSourceId: string | null;

  @Column("bigint", { name: "convocation_id", nullable: true })
  convocationId: string | null;

  @Column("bigint", { name: "preuniversity_id", nullable: true })
  preuniversityId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("bigint", { name: "commission_at" })
  commissionAt: string;

  @Column("bigint", { name: "convocation_at" })
  convocationAt: string;

  @Column("bigint", { name: "prosecution_at" })
  prosecutionAt: string;

  @Column("bigint", { name: "no" })
  no: string;

  @Column("bigint", { name: "code" })
  code: string;

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
    () => RExaminationReportApplication,
    (rExaminationReportApplication) =>
      rExaminationReportApplication.examinationReport
  )
  rExaminationReportApplications: RExaminationReportApplication[];
}
