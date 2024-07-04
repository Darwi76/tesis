import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { RCommissionTypeProsecution } from "./RCommissionTypeProsecution";
import { TbNode } from "./TbNode";
import { TbSchoolYear } from "./TbSchoolYear";
import { NomCommission } from "./NomCommission";
import { TbSonataadminServiceCommission } from "./TbSonataadminServiceCommission";

@Index("tb_commission_pkey", ["id"], { unique: true })
@Index("idx_f332a6a2936305bb", ["nodeAt"], {})
@Index("idx_f332a6a2e946114a", ["provinceId"], {})
@Index("idx_f332a6a27805653", ["schoolYearAt"], {})
@Index("idx_f332a6a2c54c8c93", ["typeId"], {})
@Entity("tb_commission", { schema: "public" })
export class TbCommission {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "type_id", nullable: true })
  typeId: string | null;

  @Column("bigint", { name: "province_id", nullable: true })
  provinceId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

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
    (rCommissionTypeProsecution) => rCommissionTypeProsecution.commission
  )
  rCommissionTypeProsecutions: RCommissionTypeProsecution[];

  @ManyToOne(() => TbNode, (tbNode) => tbNode.tbCommissions)
  @JoinColumn([{ name: "node_at", referencedColumnName: "id" }])
  nodeAt2: TbNode;

  @ManyToOne(() => TbSchoolYear, (tbSchoolYear) => tbSchoolYear.tbCommissions)
  @JoinColumn([{ name: "school_year_at", referencedColumnName: "id" }])
  schoolYearAt2: TbSchoolYear;

  @ManyToOne(
    () => NomCommission,
    (nomCommission) => nomCommission.tbCommissions
  )
  @JoinColumn([{ name: "type_id", referencedColumnName: "id" }])
  type: NomCommission;

  @OneToMany(
    () => TbSonataadminServiceCommission,
    (tbSonataadminServiceCommission) =>
      tbSonataadminServiceCommission.commissionAt2
  )
  tbSonataadminServiceCommissions: TbSonataadminServiceCommission[];
}
