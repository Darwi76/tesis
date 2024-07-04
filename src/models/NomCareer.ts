import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { NomFormingOrganism } from "./NomFormingOrganism";
import { NomCareerType } from "./NomCareerType";
import { NomScienceArea } from "./NomScienceArea";
import { RIncomesourceCareerMilitaryservice } from "./RIncomesourceCareerMilitaryservice";

@Index("idx_5502c79bfc958f96", ["formingOrganismId"], {})
@Index("nom_career_pkey", ["id"], { unique: true })
@Index("idx_5502c79b936305bb", ["nodeAt"], {})
@Index("idx_5502c79b311683e6", ["nomCareerTypeId"], {})
@Index("idx_5502c79b7805653", ["schoolYearAt"], {})
@Index("idx_5502c79b8b3a6a40", ["scienceAreaId"], {})
@Entity("nom_career", { schema: "public" })
export class NomCareer {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "science_area_id", nullable: true })
  scienceAreaId: string | null;

  @Column("bigint", { name: "forming_organism_id", nullable: true })
  formingOrganismId: string | null;

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

  @Column("boolean", { name: "pre_granted", nullable: true })
  preGranted: boolean | null;

  @Column("text", { name: "cut_average", nullable: true })
  cutAverage: string | null;

  @Column("boolean", { name: "additional_requirements", nullable: true })
  additionalRequirements: boolean | null;

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

  @Column("bigint", { name: "nom_career_type_id", nullable: true })
  nomCareerTypeId: string | null;

  @ManyToOne(
    () => NomFormingOrganism,
    (nomFormingOrganism) => nomFormingOrganism.nomCareers
  )
  @JoinColumn([{ name: "forming_organism_id", referencedColumnName: "id" }])
  formingOrganism: NomFormingOrganism;

  @ManyToOne(() => NomCareerType, (nomCareerType) => nomCareerType.nomCareers)
  @JoinColumn([{ name: "nom_career_type_id", referencedColumnName: "id" }])
  nomCareerType: NomCareerType;

  @ManyToOne(
    () => NomScienceArea,
    (nomScienceArea) => nomScienceArea.nomCareers
  )
  @JoinColumn([{ name: "science_area_id", referencedColumnName: "id" }])
  scienceArea: NomScienceArea;

  @OneToMany(
    () => RIncomesourceCareerMilitaryservice,
    (rIncomesourceCareerMilitaryservice) =>
      rIncomesourceCareerMilitaryservice.career
  )
  rIncomesourceCareerMilitaryservices: RIncomesourceCareerMilitaryservice[];
}
