import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TbSonataadminGroup } from "./TbSonataadminGroup";
import { TbNode } from "./TbNode";
import { TbSchoolYear } from "./TbSchoolYear";
import { TbSonataadminServiceCommission } from "./TbSonataadminServiceCommission";

@Index("idx_a0db67f0dad0cfbf", ["examinationId"], {})
@Index("idx_a0db67f0fe54d947", ["groupId"], {})
@Index("tb_sonataadmin_service_pkey", ["id"], { unique: true })
@Index("idx_a0db67f0936305bb", ["nodeAt"], {})
@Index("idx_a0db67f04adff43", ["prosecutionId"], {})
@Index("idx_a0db67f07805653", ["schoolYearAt"], {})
@Entity("tb_sonataadmin_service", { schema: "public" })
export class TbSonataadminService {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "group_id", nullable: true })
  groupId: string | null;

  @Column("bigint", { name: "examination_id", nullable: true })
  examinationId: string | null;

  @Column("bigint", { name: "prosecution_id", nullable: true })
  prosecutionId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "code", length: 255 })
  code: string;

  @Column("boolean", {
    name: "configurable",
    nullable: true,
    default: () => "false",
  })
  configurable: boolean | null;

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
    () => TbSonataadminGroup,
    (tbSonataadminGroup) => tbSonataadminGroup.tbSonataadminServices
  )
  @JoinColumn([{ name: "group_id", referencedColumnName: "id" }])
  group: TbSonataadminGroup;

  @ManyToOne(() => TbNode, (tbNode) => tbNode.tbSonataadminServices)
  @JoinColumn([{ name: "node_at", referencedColumnName: "id" }])
  nodeAt2: TbNode;

  @ManyToOne(
    () => TbSchoolYear,
    (tbSchoolYear) => tbSchoolYear.tbSonataadminServices
  )
  @JoinColumn([{ name: "school_year_at", referencedColumnName: "id" }])
  schoolYearAt2: TbSchoolYear;

  @OneToMany(
    () => TbSonataadminServiceCommission,
    (tbSonataadminServiceCommission) => tbSonataadminServiceCommission.service
  )
  tbSonataadminServiceCommissions: TbSonataadminServiceCommission[];
}
