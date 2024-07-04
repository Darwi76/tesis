import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { NomAssistance } from "./NomAssistance";
import { TbExaminationReport } from "./TbExaminationReport";
import { NomCompliance } from "./NomCompliance";

@Index("idx_8399f883e030acd", ["applicationId"], {})
@Index("idx_8399f887096529a", ["assistanceId"], {})
@Index("idx_8399f88f54384de", ["commissionAt"], {})
@Index("idx_8399f883d1af509", ["convocationAt"], {})
@Index("idx_8399f8862494322", ["examinationReportId"], {})
@Index("r_examination_report_application_pkey", ["id"], { unique: true })
@Index("idx_8399f88936305bb", ["nodeAt"], {})
@Index("idx_8399f88d9c68c28", ["noteCumplimentId"], {})
@Index("idx_8399f88ed13a3", ["officialComplianceNoteId"], {})
@Index("idx_8399f88d1c3652f", ["prosecutionAt"], {})
@Index("idx_8399f88bb482fd", ["reclamation1ComplianceNoteId"], {})
@Index("idx_8399f88a41dcf37", ["reclamation2ComplianceNoteId"], {})
@Index("idx_8399f887805653", ["schoolYearAt"], {})
@Entity("r_examination_report_application", { schema: "public" })
export class RExaminationReportApplication {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "note_cumpliment_id", nullable: true })
  noteCumplimentId: string | null;

  @Column("bigint", { name: "reclamation1_compliance_note_id", nullable: true })
  reclamation1ComplianceNoteId: string | null;

  @Column("bigint", { name: "reclamation2_compliance_note_id", nullable: true })
  reclamation2ComplianceNoteId: string | null;

  @Column("bigint", { name: "official_compliance_note_id", nullable: true })
  officialComplianceNoteId: string | null;

  @Column("bigint", { name: "application_id", nullable: true })
  applicationId: string | null;

  @Column("bigint", { name: "assistance_id", nullable: true })
  assistanceId: string | null;

  @Column("bigint", { name: "examination_report_id", nullable: true })
  examinationReportId: string | null;

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

  @Column("character varying", {
    name: "anonymous_folio",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  anonymousFolio: string | null;

  @Column("character varying", {
    name: "anonymous_act",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  anonymousAct: string | null;

  @Column("character varying", {
    name: "anonymos_no",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  anonymosNo: string | null;

  @Column("text", { name: "observation", nullable: true })
  observation: string | null;

  @Column("double precision", { name: "note", nullable: true, precision: 53 })
  note: number | null;

  @Column("boolean", { name: "discualified", default: () => "false" })
  discualified: boolean;

  @Column("boolean", { name: "official_discualified", default: () => "false" })
  officialDiscualified: boolean;

  @Column("double precision", {
    name: "reclamation1_note",
    nullable: true,
    precision: 53,
  })
  reclamation1Note: number | null;

  @Column("double precision", {
    name: "reclamation2_note",
    nullable: true,
    precision: 53,
  })
  reclamation2Note: number | null;

  @Column("double precision", {
    name: "official_note",
    nullable: true,
    precision: 53,
  })
  officialNote: number | null;

  @Column("boolean", { name: "reclamation1", default: () => "false" })
  reclamation1: boolean;

  @Column("boolean", { name: "reclamation2", default: () => "false" })
  reclamation2: boolean;

  @Column("boolean", {
    name: "discualified_reclamation1",
    default: () => "false",
  })
  discualifiedReclamation1: boolean;

  @Column("boolean", {
    name: "discualified_reclamation2",
    default: () => "false",
  })
  discualifiedReclamation2: boolean;

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
    () => NomAssistance,
    (nomAssistance) => nomAssistance.rExaminationReportApplications
  )
  @JoinColumn([{ name: "assistance_id", referencedColumnName: "id" }])
  assistance: NomAssistance;

  @ManyToOne(
    () => TbExaminationReport,
    (tbExaminationReport) => tbExaminationReport.rExaminationReportApplications
  )
  @JoinColumn([{ name: "examination_report_id", referencedColumnName: "id" }])
  examinationReport: TbExaminationReport;

  @ManyToOne(
    () => NomCompliance,
    (nomCompliance) => nomCompliance.rExaminationReportApplications
  )
  @JoinColumn([{ name: "note_cumpliment_id", referencedColumnName: "id" }])
  noteCumpliment: NomCompliance;

  @ManyToOne(
    () => NomCompliance,
    (nomCompliance) => nomCompliance.rExaminationReportApplications2
  )
  @JoinColumn([
    { name: "official_compliance_note_id", referencedColumnName: "id" },
  ])
  officialComplianceNote: NomCompliance;

  @ManyToOne(
    () => NomCompliance,
    (nomCompliance) => nomCompliance.rExaminationReportApplications3
  )
  @JoinColumn([
    { name: "reclamation1_compliance_note_id", referencedColumnName: "id" },
  ])
  reclamation1ComplianceNote: NomCompliance;

  @ManyToOne(
    () => NomCompliance,
    (nomCompliance) => nomCompliance.rExaminationReportApplications4
  )
  @JoinColumn([
    { name: "reclamation2_compliance_note_id", referencedColumnName: "id" },
  ])
  reclamation2ComplianceNote: NomCompliance;
}
