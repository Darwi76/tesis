import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { NomGender } from "./NomGender";
import { NomGenderPlacesPlan } from "./NomGenderPlacesPlan";

@Index("idx_8a9acc46708a0e0", ["genderId"], {})
@Index("idx_8a9acc465cb9c525", ["genderplacesplanId"], {})
@Index("r_gender_nom_gender_places_plan_pkey", ["id"], { unique: true })
@Index("idx_8a9acc46936305bb", ["nodeAt"], {})
@Index("idx_8a9acc467805653", ["schoolYearAt"], {})
@Entity("r_gender_nom_gender_places_plan", { schema: "public" })
export class RGenderNomGenderPlacesPlan {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "gender_id", nullable: true })
  genderId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

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

  @Column("bigint", { name: "genderplacesplan_id", nullable: true })
  genderplacesplanId: string | null;

  @ManyToOne(
    () => NomGender,
    (nomGender) => nomGender.rGenderNomGenderPlacesPlans
  )
  @JoinColumn([{ name: "gender_id", referencedColumnName: "id" }])
  gender: NomGender;

  @ManyToOne(
    () => NomGenderPlacesPlan,
    (nomGenderPlacesPlan) => nomGenderPlacesPlan.rGenderNomGenderPlacesPlans
  )
  @JoinColumn([{ name: "genderplacesplan_id", referencedColumnName: "id" }])
  genderplacesplan: NomGenderPlacesPlan;
}
