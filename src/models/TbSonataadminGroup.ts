import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TbNode } from "./TbNode";
import { TbSchoolYear } from "./TbSchoolYear";
import { TbSonataadminService } from "./TbSonataadminService";

@Index("tb_sonataadmin_group_pkey", ["id"], { unique: true })
@Index("idx_581a83ec936305bb", ["nodeAt"], {})
@Index("idx_581a83ec7805653", ["schoolYearAt"], {})
@Entity("tb_sonataadmin_group", { schema: "public" })
export class TbSonataadminGroup {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("text", { name: "type" })
  type: string;

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

  @ManyToOne(() => TbNode, (tbNode) => tbNode.tbSonataadminGroups)
  @JoinColumn([{ name: "node_at", referencedColumnName: "id" }])
  nodeAt2: TbNode;

  @ManyToOne(
    () => TbSchoolYear,
    (tbSchoolYear) => tbSchoolYear.tbSonataadminGroups
  )
  @JoinColumn([{ name: "school_year_at", referencedColumnName: "id" }])
  schoolYearAt2: TbSchoolYear;

  @OneToMany(
    () => TbSonataadminService,
    (tbSonataadminService) => tbSonataadminService.group
  )
  tbSonataadminServices: TbSonataadminService[];
}
