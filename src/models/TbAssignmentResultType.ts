import { Column, Entity, Index, OneToMany } from "typeorm";
import { TbExpedientStudent } from "./TbExpedientStudent";

@Index("tb_assignment_result_type_pkey", ["id"], { unique: true })
@Index("idx_bbfd53fa936305bb", ["nodeAt"], {})
@Entity("tb_assignment_result_type", { schema: "public" })
export class TbAssignmentResultType {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("character varying", { name: "type", length: 255 })
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

  @OneToMany(
    () => TbExpedientStudent,
    (tbExpedientStudent) => tbExpedientStudent.assignmentResultType2
  )
  tbExpedientStudents: TbExpedientStudent[];
}
