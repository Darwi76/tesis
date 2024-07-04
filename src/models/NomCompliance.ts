import { Column, Entity, Index, OneToMany } from "typeorm";
import { RExaminationReportApplication } from "./RExaminationReportApplication";

@Index("nom_compliance_pkey", ["id"], { unique: true })
@Index("idx_9ae7c50a936305bb", ["nodeAt"], {})
@Index("idx_9ae7c50a7805653", ["schoolYearAt"], {})
@Entity("nom_compliance", { schema: "public" })
export class NomCompliance {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "type", length: 255 })
  type: string;

  @Column("character varying", { name: "short_name", length: 255 })
  shortName: string;

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
      rExaminationReportApplication.noteCumpliment
  )
  rExaminationReportApplications: RExaminationReportApplication[];

  @OneToMany(
    () => RExaminationReportApplication,
    (rExaminationReportApplication) =>
      rExaminationReportApplication.officialComplianceNote
  )
  rExaminationReportApplications2: RExaminationReportApplication[];

  @OneToMany(
    () => RExaminationReportApplication,
    (rExaminationReportApplication) =>
      rExaminationReportApplication.reclamation1ComplianceNote
  )
  rExaminationReportApplications3: RExaminationReportApplication[];

  @OneToMany(
    () => RExaminationReportApplication,
    (rExaminationReportApplication) =>
      rExaminationReportApplication.reclamation2ComplianceNote
  )
  rExaminationReportApplications4: RExaminationReportApplication[];
}
