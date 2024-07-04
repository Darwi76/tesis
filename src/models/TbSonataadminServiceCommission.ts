import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TbCommission } from "./TbCommission";
import { TbNode } from "./TbNode";
import { TbSchoolYear } from "./TbSchoolYear";
import { TbSonataadminService } from "./TbSonataadminService";

@Index("idx_f9c9b12df54384de", ["commissionAt"], {})
@Index("idx_f9c9b12d3d1af509", ["convocationAt"], {})
@Index("tb_sonataadmin_service_commission_pkey", ["id"], { unique: true })
@Index("idx_f9c9b12d936305bb", ["nodeAt"], {})
@Index("idx_f9c9b12d7805653", ["schoolYearAt"], {})
@Index("idx_f9c9b12ded5ca9e6", ["serviceId"], {})
@Entity("tb_sonataadmin_service_commission", { schema: "public" })
export class TbSonataadminServiceCommission {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "service_id", nullable: true })
  serviceId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("bigint", { name: "commission_at" })
  commissionAt: string;

  @Column("bigint", { name: "convocation_at" })
  convocationAt: string;

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
    () => TbCommission,
    (tbCommission) => tbCommission.tbSonataadminServiceCommissions
  )
  @JoinColumn([{ name: "commission_at", referencedColumnName: "id" }])
  commissionAt2: TbCommission;

  @ManyToOne(() => TbNode, (tbNode) => tbNode.tbSonataadminServiceCommissions)
  @JoinColumn([{ name: "node_at", referencedColumnName: "id" }])
  nodeAt2: TbNode;

  @ManyToOne(
    () => TbSchoolYear,
    (tbSchoolYear) => tbSchoolYear.tbSonataadminServiceCommissions
  )
  @JoinColumn([{ name: "school_year_at", referencedColumnName: "id" }])
  schoolYearAt2: TbSchoolYear;

  @ManyToOne(
    () => TbSonataadminService,
    (tbSonataadminService) =>
      tbSonataadminService.tbSonataadminServiceCommissions
  )
  @JoinColumn([{ name: "service_id", referencedColumnName: "id" }])
  service: TbSonataadminService;
}
