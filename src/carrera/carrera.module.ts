import { Module } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CarreraController } from './carrera.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NomConvocation } from 'src/models/NomConvocation';
import { NomProsecution } from 'src/models/NomProsecution';
import { RStudentExaminationExonerated } from 'src/models/RStudentExaminationExonerated';
import { TbStudent } from 'src/models/TbStudent';
import { BosonAutenticationSource } from 'src/models/BosonAutenticationSource';
import { BosonEstateSso } from 'src/models/BosonEstateSso';
import { BosonFuncionalidad } from 'src/models/BosonFuncionalidad';
import { BosonPermiso } from 'src/models/BosonPermiso';
import { BosonResourse } from 'src/models/BosonResourse';
import { Discapacitado } from 'src/models/Discapacitados.entity';
import { Interchange } from 'src/models/Interchange.entity';
import { NomAverage } from 'src/models/NomAverage';
import { NomCareer } from 'src/models/NomCareer';
import { NomCareerType } from 'src/models/NomCareerType';
import { NomCommission } from 'src/models/NomCommission';
import { NomCurrentSituation } from 'src/models/NomCurrentSituation';
import { NomExamination } from 'src/models/NomExamination';
import { NomFormingOrganism } from 'src/models/NomFormingOrganism';
import { NomGender } from 'src/models/NomGender';
import { NomGenderPlacesPlan } from 'src/models/NomGenderPlacesPlan';
import { NomGenderType } from 'src/models/NomGenderType';
import { NomIncomeSource } from 'src/models/NomIncomeSource';
import { NomIncomeSourceAssigmentType } from 'src/models/NomIncomeSourceAssigmentType';
import { NomIncomeSourceFather } from 'src/models/NomIncomeSourceFather';
import { NomIncomeSourceProvinceAssigmentType } from 'src/models/NomIncomeSourceProvinceAssigmentType';
import { NomLaboralSector } from 'src/models/NomLaboralSector';
import { NomMilitaryService } from 'src/models/NomMilitaryService';
import { NomModality } from 'src/models/NomModality';
import { NomNationality } from 'src/models/NomNationality';
import { NomOccupation } from 'src/models/NomOccupation';
import { NomPreuniversity } from 'src/models/NomPreuniversity';
import { NomPromotionLadder } from 'src/models/NomPromotionLadder';
import { NomProvenance } from 'src/models/NomProvenance';
import { NomScholarship } from 'src/models/NomScholarship';
import { NomScienceArea } from 'src/models/NomScienceArea';
import { NomSies } from 'src/models/NomSies';
import { NomSkinColor } from 'src/models/NomSkinColor';
import { NomState } from 'src/models/NomState';
import { NomWinnerOfEvent } from 'src/models/NomWinnerOfEvent';
import { RCareerApplication } from 'src/models/RCareerApplication';
import { RCareerApplicationGranted } from 'src/models/RCareerApplicationGranted';
import { RCareerApplicationPreGranted } from 'src/models/RCareerApplicationPreGranted';
import { RCommissionTypeProsecution } from 'src/models/RCommissionTypeProsecution';
import { RConvocationTypeCommision } from 'src/models/RConvocationTypeCommision';
import { RExaminationTypeIncomeSource } from 'src/models/RExaminationTypeIncomeSource';
import { RGenderNomGenderPlacesPlan } from 'src/models/RGenderNomGenderPlacesPlan';
import { RIncomesourceCareerMilitaryservice } from 'src/models/RIncomesourceCareerMilitaryservice';
import { RIncomeSourceFatherIncomeSource } from 'src/models/RIncomeSourceFatherIncomeSource';
import { RIncomeSourceNomPreuniversity } from 'src/models/RIncomeSourceNomPreuniversity';
import { RIncomeSourceProvenanceCurrentSituation } from 'src/models/RIncomeSourceProvenanceCurrentSituation';
import { RNoteExpedientStudent } from 'src/models/RNoteExpedientStudent';
import { RPlacesPlanCareer } from 'src/models/RPlacesPlanCareer';
import { RPlacesPlanCareerConvocation } from 'src/models/RPlacesPlanCareerConvocation';
import { RPlacesPlanCareerMove } from 'src/models/RPlacesPlanCareerMove';
import { RPlacesPlanCareerProsecution } from 'src/models/RPlacesPlanCareerProsecution';
import { RPlacesPlanCareerProsecutionPreassignment } from 'src/models/RPlacesPlanCareerProsecutionPreassignment';
import { RPlacesPlanCareerProsecutionUpdate } from 'src/models/RPlacesPlanCareerProsecutionUpdate';
import { RStudentExaminationSies } from 'src/models/RStudentExaminationSies';
import { TbAdditionalRequirement } from 'src/models/TbAdditionalRequirement';
import { TbApplication } from 'src/models/TbApplication';
import { TbApplicationInterchange } from 'src/models/TbApplicationInterchange';
import { TbApplicationLoad } from 'src/models/TbApplicationLoad';
import { TbAssignment } from 'src/models/TbAssignment';
import { TbAssignmentResultType } from 'src/models/TbAssignmentResultType';
import { TbCes } from 'src/models/TbCes';
import { TbCommission } from 'src/models/TbCommission';
import { TbExpedientStudent } from 'src/models/TbExpedientStudent';
import { TbExportEntity } from 'src/models/TbExportEntity';
import { TbExportModels } from 'src/models/TbExportModels';
import { TbImportModels } from 'src/models/TbImportModels';
import { TbMunicipality } from 'src/models/TbMunicipality';
import { TbNode } from 'src/models/TbNode';
import { TbOfficialSies } from 'src/models/TbOfficialSies';
import { TbPlacesPlan } from 'src/models/TbPlacesPlan';
import { TbPreassignmentStateType } from 'src/models/TbPreassignmentStateType';
import { TbPreparateProsecution } from 'src/models/TbPreparateProsecution';
import { TbPreuniversity } from 'src/models/TbPreuniversity';
import { TbProsecution } from 'src/models/TbProsecution';
import { TbProvince } from 'src/models/TbProvince';
import { TbSchoolYear } from 'src/models/TbSchoolYear';
import { TbSchoolYearLoadData } from 'src/models/TbSchoolYearLoadData';
import { TbSonataadminGroup } from 'src/models/TbSonataadminGroup';
import { TbSonataadminService } from 'src/models/TbSonataadminService';
import { TbSonataadminServiceCommission } from 'src/models/TbSonataadminServiceCommission';
import { TbStudentOfficialSies } from 'src/models/TbStudentOfficialSies';
import { TbStudentSies } from 'src/models/TbStudentSies';
import { TbTerritorialLink } from 'src/models/TbTerritorialLink';
import { TbUserProfile } from 'src/models/TbUserProfile';
import { XalixRol } from 'src/models/XalixRol';
import { XalixRolUsuario } from 'src/models/XalixRolUsuario';
import { XalixUser } from 'src/models/XalixUser';

@Module({
  controllers: [CarreraController],
  providers: [CarreraService],
  imports: [
    TypeOrmModule.forFeature([
      CarreraModule,
      NomConvocation,
      NomProsecution,
      TbStudent,
      RStudentExaminationExonerated,
      NomMilitaryService,
      NomProsecution,
      NomSies,
      NomNationality,
      NomAverage,
      NomCareer,
      NomCareerType,
      NomConvocation,
      NomCurrentSituation,
      NomExamination,
      NomFormingOrganism,
      NomGender,
      NomGenderPlacesPlan,
      NomGenderType,
      NomIncomeSource,
      NomIncomeSourceAssigmentType,
      NomIncomeSourceFather,
      NomIncomeSourceProvinceAssigmentType,
      NomLaboralSector,
      NomModality,
      NomOccupation,
      NomPreuniversity,
      NomPromotionLadder,
      NomProvenance,
      NomScholarship,
      NomScienceArea,
      NomSkinColor,
      NomWinnerOfEvent,
      RConvocationTypeCommision,
      RExaminationTypeIncomeSource,
      RGenderNomGenderPlacesPlan,
      RIncomeSourceFatherIncomeSource,
      RIncomeSourceNomPreuniversity,
      RIncomeSourceProvenanceCurrentSituation,
      RIncomesourceCareerMilitaryservice,
      TbExportEntity,
      RNoteExpedientStudent,
      RPlacesPlanCareerMove,
      RStudentExaminationSies,
      RCareerApplication,
      RCareerApplicationGranted,
      RCareerApplicationPreGranted,
      RPlacesPlanCareer,
      RPlacesPlanCareerConvocation,
      RPlacesPlanCareerProsecution,
      RPlacesPlanCareerProsecutionPreassignment,
      RPlacesPlanCareerProsecutionUpdate,
      TbAdditionalRequirement,
      TbApplication,
      TbApplicationInterchange,
      TbApplicationLoad,
      TbCes,
      TbMunicipality,
      TbPlacesPlan,
      TbPreuniversity,
      TbProvince,
      TbStudent,
      TbTerritorialLink,
      TbAssignment,
      TbAssignmentResultType,
      TbExpedientStudent,
      TbOfficialSies,
      TbPreassignmentStateType,
      TbPreparateProsecution,
      TbProsecution,
      TbStudentOfficialSies,
      TbStudentSies,
      XalixRol,
      XalixRolUsuario,
      XalixUser,
      BosonPermiso,
      BosonResourse,
      BosonFuncionalidad,
      BosonAutenticationSource,
      BosonEstateSso,
      TbUserProfile,
      TbExportModels,
      TbImportModels,
      NomCommission,
      NomState,
      NomState,
      RCommissionTypeProsecution,
      TbCommission,
      TbNode,
      TbSchoolYear,
      TbSchoolYearLoadData,
      TbSonataadminGroup,
      TbSonataadminService,
      TbSonataadminServiceCommission,
      RStudentExaminationExonerated,
      Interchange,
      Discapacitado,
      Event,
    ]),
  ],
})
export class CarreraModule {}
