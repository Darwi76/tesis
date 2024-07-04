import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { RCommissionTypeProsecution } from "./RCommissionTypeProsecution";
import { TbCommission } from "./TbCommission";
import { TbNode } from "./TbNode";
import { NomState } from "./NomState";
import { TbSchoolYearLoadData } from "./TbSchoolYearLoadData";
import { TbSonataadminGroup } from "./TbSonataadminGroup";
import { TbSonataadminService } from "./TbSonataadminService";
import { TbSonataadminServiceCommission } from "./TbSonataadminServiceCommission";

@Index("tb_school_year_pkey", ["id"], { unique: true })
@Index("idx_a72de07f936305bb", ["nodeAt"], {})
@Index("idx_a72de07f5d83cc1", ["stateId"], {})
@Entity("tb_school_year", { schema: "public" })
export class TbSchoolYear {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "state_id", nullable: true })
  stateId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

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
    () => RCommissionTypeProsecution,
    (rCommissionTypeProsecution) => rCommissionTypeProsecution.schoolYearAt2
  )
  rCommissionTypeProsecutions: RCommissionTypeProsecution[];

  @OneToMany(() => TbCommission, (tbCommission) => tbCommission.schoolYearAt2)
  tbCommissions: TbCommission[];

  @ManyToOne(() => TbNode, (tbNode) => tbNode.tbSchoolYears)
  @JoinColumn([{ name: "node_at", referencedColumnName: "id" }])
  nodeAt2: TbNode;

  @ManyToOne(() => NomState, (nomState) => nomState.tbSchoolYears)
  @JoinColumn([{ name: "state_id", referencedColumnName: "id" }])
  state: NomState;

  @OneToMany(
    () => TbSchoolYearLoadData,
    (tbSchoolYearLoadData) => tbSchoolYearLoadData.schoolYearAt2
  )
  tbSchoolYearLoadData: TbSchoolYearLoadData[];

  @OneToMany(
    () => TbSchoolYearLoadData,
    (tbSchoolYearLoadData) => tbSchoolYearLoadData.schoolYearSource2
  )
  tbSchoolYearLoadData2: TbSchoolYearLoadData[];

  @OneToMany(
    () => TbSonataadminGroup,
    (tbSonataadminGroup) => tbSonataadminGroup.schoolYearAt2
  )
  tbSonataadminGroups: TbSonataadminGroup[];

  @OneToMany(
    () => TbSonataadminService,
    (tbSonataadminService) => tbSonataadminService.schoolYearAt2
  )
  tbSonataadminServices: TbSonataadminService[];

  @OneToMany(
    () => TbSonataadminServiceCommission,
    (tbSonataadminServiceCommission) =>
      tbSonataadminServiceCommission.schoolYearAt2
  )
  tbSonataadminServiceCommissions: TbSonataadminServiceCommission[];
}
