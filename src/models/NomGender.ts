import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { NomGenderType } from "./NomGenderType";
import { RGenderNomGenderPlacesPlan } from "./RGenderNomGenderPlacesPlan";

@Index("idx_201ea15d6d1b16b3", ["genderType"], {})
@Index("nom_gender_pkey", ["id"], { unique: true })
@Index("idx_201ea15d936305bb", ["nodeAt"], {})
@Index("idx_201ea15d7805653", ["schoolYearAt"], {})
@Entity("nom_gender", { schema: "public" })
export class NomGender {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "gender_type", nullable: true })
  genderType: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("bigint", { name: "school_year_at" })
  schoolYearAt: string;

  @Column("character varying", { name: "code", length: 255 })
  code: string;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "short_name", length: 255 })
  shortName: string;

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

  @ManyToOne(() => NomGenderType, (nomGenderType) => nomGenderType.nomGenders)
  @JoinColumn([{ name: "gender_type", referencedColumnName: "id" }])
  genderType2: NomGenderType;

  @OneToMany(
    () => RGenderNomGenderPlacesPlan,
    (rGenderNomGenderPlacesPlan) => rGenderNomGenderPlacesPlan.gender
  )
  rGenderNomGenderPlacesPlans: RGenderNomGenderPlacesPlan[];
}
