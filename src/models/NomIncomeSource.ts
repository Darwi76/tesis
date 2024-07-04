import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { NomIncomeSourceAssigmentType } from "./NomIncomeSourceAssigmentType";
import { NomModality } from "./NomModality";
import { NomPromotionLadder } from "./NomPromotionLadder";
import { NomIncomeSourceProvinceAssigmentType } from "./NomIncomeSourceProvinceAssigmentType";
import { RExaminationTypeIncomeSource } from "./RExaminationTypeIncomeSource";
import { RIncomeSourceFatherIncomeSource } from "./RIncomeSourceFatherIncomeSource";
import { RIncomeSourceNomPreuniversity } from "./RIncomeSourceNomPreuniversity";
import { RIncomeSourceProvenanceCurrentSituation } from "./RIncomeSourceProvenanceCurrentSituation";
import { RIncomesourceCareerMilitaryservice } from "./RIncomesourceCareerMilitaryservice";

@Index("idx_3cbfd075e5e5830e", ["assigmentType"], {})
@Index("nom_income_source_pkey", ["id"], { unique: true })
@Index("idx_3cbfd075fd576ac3", ["modalityTypeId"], {})
@Index("idx_3cbfd075936305bb", ["nodeAt"], {})
@Index("idx_3cbfd07530172c9", ["promotionLadderType"], {})
@Index("idx_3cbfd0751357f8ca", ["provinceAssigmentType"], {})
@Index("idx_3cbfd0757805653", ["schoolYearAt"], {})
@Entity("nom_income_source", { schema: "public" })
export class NomIncomeSource {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "province_assigment_type", nullable: true })
  provinceAssigmentType: string | null;

  @Column("bigint", { name: "assigment_type", nullable: true })
  assigmentType: string | null;

  @Column("bigint", { name: "promotion_ladder_type", nullable: true })
  promotionLadderType: string | null;

  @Column("bigint", { name: "modality_type_id", nullable: true })
  modalityTypeId: string | null;

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

  @Column("boolean", { name: "academic_index" })
  academicIndex: boolean;

  @Column("boolean", { name: "military_service" })
  militaryService: boolean;

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
    () => NomIncomeSourceAssigmentType,
    (nomIncomeSourceAssigmentType) =>
      nomIncomeSourceAssigmentType.nomIncomeSources
  )
  @JoinColumn([{ name: "assigment_type", referencedColumnName: "id" }])
  assigmentType2: NomIncomeSourceAssigmentType;

  @ManyToOne(() => NomModality, (nomModality) => nomModality.nomIncomeSources)
  @JoinColumn([{ name: "modality_type_id", referencedColumnName: "id" }])
  modalityType: NomModality;

  @ManyToOne(
    () => NomPromotionLadder,
    (nomPromotionLadder) => nomPromotionLadder.nomIncomeSources
  )
  @JoinColumn([{ name: "promotion_ladder_type", referencedColumnName: "id" }])
  promotionLadderType2: NomPromotionLadder;

  @ManyToOne(
    () => NomIncomeSourceProvinceAssigmentType,
    (nomIncomeSourceProvinceAssigmentType) =>
      nomIncomeSourceProvinceAssigmentType.nomIncomeSources
  )
  @JoinColumn([{ name: "province_assigment_type", referencedColumnName: "id" }])
  provinceAssigmentType2: NomIncomeSourceProvinceAssigmentType;

  @OneToMany(
    () => RExaminationTypeIncomeSource,
    (rExaminationTypeIncomeSource) => rExaminationTypeIncomeSource.incomeSource
  )
  rExaminationTypeIncomeSources: RExaminationTypeIncomeSource[];

  @OneToMany(
    () => RIncomeSourceFatherIncomeSource,
    (rIncomeSourceFatherIncomeSource) =>
      rIncomeSourceFatherIncomeSource.incomeSource
  )
  rIncomeSourceFatherIncomeSources: RIncomeSourceFatherIncomeSource[];

  @OneToMany(
    () => RIncomeSourceNomPreuniversity,
    (rIncomeSourceNomPreuniversity) =>
      rIncomeSourceNomPreuniversity.incomeSource
  )
  rIncomeSourceNomPreuniversities: RIncomeSourceNomPreuniversity[];

  @OneToMany(
    () => RIncomeSourceProvenanceCurrentSituation,
    (rIncomeSourceProvenanceCurrentSituation) =>
      rIncomeSourceProvenanceCurrentSituation.incomeSource
  )
  rIncomeSourceProvenanceCurrentSituations: RIncomeSourceProvenanceCurrentSituation[];

  @OneToMany(
    () => RIncomesourceCareerMilitaryservice,
    (rIncomesourceCareerMilitaryservice) =>
      rIncomesourceCareerMilitaryservice.incomeSource
  )
  rIncomesourceCareerMilitaryservices: RIncomesourceCareerMilitaryservice[];
}
