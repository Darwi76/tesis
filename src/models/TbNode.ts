import { Column, Entity, Index, OneToMany } from "typeorm";
import { NomCommission } from "./NomCommission";
import { NomState } from "./NomState";
import { RCommissionTypeProsecution } from "./RCommissionTypeProsecution";
import { TbCommission } from "./TbCommission";
import { TbSchoolYear } from "./TbSchoolYear";
import { TbSchoolYearLoadData } from "./TbSchoolYearLoadData";
import { TbSonataadminGroup } from "./TbSonataadminGroup";
import { TbSonataadminService } from "./TbSonataadminService";
import { TbSonataadminServiceCommission } from "./TbSonataadminServiceCommission";

@Index("tb_node_pkey", ["id"], { unique: true })
@Entity("tb_node", { schema: "public" })
export class TbNode {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("integer", { name: "identifier" })
  identifier: number;

  @Column("boolean", { name: "locked", default: () => "false" })
  locked: boolean;

  @Column("boolean", { name: "maintenance", default: () => "false" })
  maintenance: boolean;

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

  @OneToMany(() => NomCommission, (nomCommission) => nomCommission.nodeAt2)
  nomCommissions: NomCommission[];

  @OneToMany(() => NomState, (nomState) => nomState.nodeAt2)
  nomStates: NomState[];

  @OneToMany(
    () => RCommissionTypeProsecution,
    (rCommissionTypeProsecution) => rCommissionTypeProsecution.nodeAt2
  )
  rCommissionTypeProsecutions: RCommissionTypeProsecution[];

  @OneToMany(() => TbCommission, (tbCommission) => tbCommission.nodeAt2)
  tbCommissions: TbCommission[];

  @OneToMany(() => TbSchoolYear, (tbSchoolYear) => tbSchoolYear.nodeAt2)
  tbSchoolYears: TbSchoolYear[];

  @OneToMany(
    () => TbSchoolYearLoadData,
    (tbSchoolYearLoadData) => tbSchoolYearLoadData.nodeAt2
  )
  tbSchoolYearLoadData: TbSchoolYearLoadData[];

  @OneToMany(
    () => TbSonataadminGroup,
    (tbSonataadminGroup) => tbSonataadminGroup.nodeAt2
  )
  tbSonataadminGroups: TbSonataadminGroup[];

  @OneToMany(
    () => TbSonataadminService,
    (tbSonataadminService) => tbSonataadminService.nodeAt2
  )
  tbSonataadminServices: TbSonataadminService[];

  @OneToMany(
    () => TbSonataadminServiceCommission,
    (tbSonataadminServiceCommission) => tbSonataadminServiceCommission.nodeAt2
  )
  tbSonataadminServiceCommissions: TbSonataadminServiceCommission[];
}
