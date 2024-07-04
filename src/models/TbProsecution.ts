import { Column, Entity, Index, ManyToMany, OneToMany } from "typeorm";
import { RPlacesPlanCareerMove } from "./RPlacesPlanCareerMove";
import { NomProsecution } from "./NomProsecution";
import { TbAssignment } from "./TbAssignment";
import { TbOfficialSies } from "./TbOfficialSies";
import { TbPreparateProsecution } from "./TbPreparateProsecution";
import { TbStudentSies } from "./TbStudentSies";

@Index("tb_prosecution_pkey", ["id"], { unique: true })
@Index("idx_bae0bc7c936305bb", ["nodeAt"], {})
@Index("idx_bae0bc7c61eed0d", ["nomconvocationId"], {})
@Index("idx_bae0bc7c7805653", ["schoolYearAt"], {})
@Index("idx_bae0bc7c5d83cc1", ["stateId"], {})
@Entity("tb_prosecution", { schema: "public" })
export class TbProsecution {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "state_id", nullable: true })
  stateId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", {
    name: "name",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  name: string | null;

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

  @Column("bigint", { name: "nomconvocation_id", nullable: true })
  nomconvocationId: string | null;

  @OneToMany(
    () => RPlacesPlanCareerMove,
    (rPlacesPlanCareerMove) => rPlacesPlanCareerMove.prosecutionAt2
  )
  rPlacesPlanCareerMoves: RPlacesPlanCareerMove[];

  @ManyToMany(
    () => NomProsecution,
    (nomProsecution) => nomProsecution.tbProsecutions
  )
  nomProsecutions: NomProsecution[];

  @OneToMany(() => TbAssignment, (tbAssignment) => tbAssignment.prosecutionAt2)
  tbAssignments: TbAssignment[];

  @OneToMany(
    () => TbOfficialSies,
    (tbOfficialSies) => tbOfficialSies.prosecutionAt2
  )
  tbOfficialSies: TbOfficialSies[];

  @OneToMany(
    () => TbPreparateProsecution,
    (tbPreparateProsecution) => tbPreparateProsecution.prosecutionAt2
  )
  tbPreparateProsecutions: TbPreparateProsecution[];

  @OneToMany(
    () => TbStudentSies,
    (tbStudentSies) => tbStudentSies.prosecutionAt2
  )
  tbStudentSies: TbStudentSies[];
}
