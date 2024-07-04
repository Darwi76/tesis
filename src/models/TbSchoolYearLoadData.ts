import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TbNode } from "./TbNode";
import { TbSchoolYear } from "./TbSchoolYear";

@Index("tb_school_year_load_data_pkey", ["id"], { unique: true })
@Index("idx_4d52cef5936305bb", ["nodeAt"], {})
@Index("idx_4d52cef57805653", ["schoolYearAt"], {})
@Index("idx_4d52cef51498649a", ["schoolYearSource"], {})
@Entity("tb_school_year_load_data", { schema: "public" })
export class TbSchoolYearLoadData {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "school_year_source", nullable: true })
  schoolYearSource: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("text", { name: "options" })
  options: string;

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

  @ManyToOne(() => TbNode, (tbNode) => tbNode.tbSchoolYearLoadData)
  @JoinColumn([{ name: "node_at", referencedColumnName: "id" }])
  nodeAt2: TbNode;

  @ManyToOne(
    () => TbSchoolYear,
    (tbSchoolYear) => tbSchoolYear.tbSchoolYearLoadData
  )
  @JoinColumn([{ name: "school_year_at", referencedColumnName: "id" }])
  schoolYearAt2: TbSchoolYear;

  @ManyToOne(
    () => TbSchoolYear,
    (tbSchoolYear) => tbSchoolYear.tbSchoolYearLoadData2
  )
  @JoinColumn([{ name: "school_year_source", referencedColumnName: "id" }])
  schoolYearSource2: TbSchoolYear;
}
