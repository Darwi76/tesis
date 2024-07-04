import { Column, Entity, Index } from "typeorm";

@Index("idx_fb0c53ccab72046", ["assignmentResultType"], {})
@Index("nom_winner_of_event_pkey", ["id"], { unique: true })
@Index("idx_fb0c53cc936305bb", ["nodeAt"], {})
@Index("idx_fb0c53cc7805653", ["schoolYearAt"], {})
@Entity("nom_winner_of_event", { schema: "public" })
export class NomWinnerOfEvent {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "assignment_result_type", nullable: true })
  assignmentResultType: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", {
    name: "code",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  code: string | null;

  @Column("character varying", {
    name: "name",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  name: string | null;

  @Column("character varying", {
    name: "short_name",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  shortName: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

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
}
