import { Column, Entity, Index, OneToMany } from "typeorm";
import { RExaminationReportApplication } from "./RExaminationReportApplication";

@Index("nom_assistance_pkey", ["id"], { unique: true })
@Index("idx_2561bd2b936305bb", ["nodeAt"], {})
@Index("idx_2561bd2b7805653", ["schoolYearAt"], {})
@Entity("nom_assistance", { schema: "public" })
export class NomAssistance {
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
    (rExaminationReportApplication) => rExaminationReportApplication.assistance
  )
  rExaminationReportApplications: RExaminationReportApplication[];
}
