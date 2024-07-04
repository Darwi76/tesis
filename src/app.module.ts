import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera, Estudiante, Provincia } from './models';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { CarreraModule } from './carrera/carrera.module';
import { BosonAutenticationSource } from './models/BosonAutenticationSource';
import { BosonEstateSso } from './models/BosonEstateSso';
import { BosonFuncionalidad } from './models/BosonFuncionalidad';
import { BosonPermiso } from './models/BosonPermiso';
import { BosonResourse } from './models/BosonResourse';
import { Discapacitado } from './models/Discapacitados.entity';
import { Interchange } from './models/Interchange.entity';
import { NomAverage } from './models/NomAverage';
import { NomCareer } from './models/NomCareer';
import { NomCareerType } from './models/NomCareerType';
import { NomCommission } from './models/NomCommission';
import { NomConvocation } from './models/NomConvocation';
import { NomCurrentSituation } from './models/NomCurrentSituation';
import { NomExamination } from './models/NomExamination';
import { NomFormingOrganism } from './models/NomFormingOrganism';
import { NomGender } from './models/NomGender';
import { NomGenderPlacesPlan } from './models/NomGenderPlacesPlan';
import { NomGenderType } from './models/NomGenderType';
import { NomIncomeSource } from './models/NomIncomeSource';
import { NomIncomeSourceAssigmentType } from './models/NomIncomeSourceAssigmentType';
import { NomIncomeSourceFather } from './models/NomIncomeSourceFather';
import { NomIncomeSourceProvinceAssigmentType } from './models/NomIncomeSourceProvinceAssigmentType';
import { NomLaboralSector } from './models/NomLaboralSector';
import { NomMilitaryService } from './models/NomMilitaryService';
import { NomModality } from './models/NomModality';
import { NomNationality } from './models/NomNationality';
import { NomOccupation } from './models/NomOccupation';
import { NomPreuniversity } from './models/NomPreuniversity';
import { NomPromotionLadder } from './models/NomPromotionLadder';
import { NomProsecution } from './models/NomProsecution';
import { NomProvenance } from './models/NomProvenance';
import { NomScholarship } from './models/NomScholarship';
import { NomScienceArea } from './models/NomScienceArea';
import { NomSies } from './models/NomSies';
import { NomSkinColor } from './models/NomSkinColor';
import { NomState } from './models/NomState';
import { NomWinnerOfEvent } from './models/NomWinnerOfEvent';
import { RCareerApplication } from './models/RCareerApplication';
import { RCareerApplicationGranted } from './models/RCareerApplicationGranted';
import { RCareerApplicationPreGranted } from './models/RCareerApplicationPreGranted';
import { RCommissionTypeProsecution } from './models/RCommissionTypeProsecution';
import { RConvocationTypeCommision } from './models/RConvocationTypeCommision';
import { RExaminationTypeIncomeSource } from './models/RExaminationTypeIncomeSource';
import { RGenderNomGenderPlacesPlan } from './models/RGenderNomGenderPlacesPlan';
import { RIncomesourceCareerMilitaryservice } from './models/RIncomesourceCareerMilitaryservice';
import { RIncomeSourceFatherIncomeSource } from './models/RIncomeSourceFatherIncomeSource';
import { RIncomeSourceNomPreuniversity } from './models/RIncomeSourceNomPreuniversity';
import { RIncomeSourceProvenanceCurrentSituation } from './models/RIncomeSourceProvenanceCurrentSituation';
import { RNoteExpedientStudent } from './models/RNoteExpedientStudent';
import { RPlacesPlanCareer } from './models/RPlacesPlanCareer';
import { RPlacesPlanCareerConvocation } from './models/RPlacesPlanCareerConvocation';
import { RPlacesPlanCareerMove } from './models/RPlacesPlanCareerMove';
import { RPlacesPlanCareerProsecution } from './models/RPlacesPlanCareerProsecution';
import { RPlacesPlanCareerProsecutionPreassignment } from './models/RPlacesPlanCareerProsecutionPreassignment';
import { RPlacesPlanCareerProsecutionUpdate } from './models/RPlacesPlanCareerProsecutionUpdate';
import { RStudentExaminationExonerated } from './models/RStudentExaminationExonerated';
import { RStudentExaminationSies } from './models/RStudentExaminationSies';
import { TbAdditionalRequirement } from './models/TbAdditionalRequirement';
import { TbApplication } from './models/TbApplication';
import { TbApplicationInterchange } from './models/TbApplicationInterchange';
import { TbApplicationLoad } from './models/TbApplicationLoad';
import { TbAssignment } from './models/TbAssignment';
import { TbAssignmentResultType } from './models/TbAssignmentResultType';
import { TbCes } from './models/TbCes';
import { TbCommission } from './models/TbCommission';
import { TbExpedientStudent } from './models/TbExpedientStudent';
import { TbExportEntity } from './models/TbExportEntity';
import { TbExportModels } from './models/TbExportModels';
import { TbImportModels } from './models/TbImportModels';
import { TbMunicipality } from './models/TbMunicipality';
import { TbNode } from './models/TbNode';
import { TbOfficialSies } from './models/TbOfficialSies';
import { TbPlacesPlan } from './models/TbPlacesPlan';
import { TbPreassignmentStateType } from './models/TbPreassignmentStateType';
import { TbPreparateProsecution } from './models/TbPreparateProsecution';
import { TbPreuniversity } from './models/TbPreuniversity';
import { TbProsecution } from './models/TbProsecution';
import { TbProvince } from './models/TbProvince';
import { TbSchoolYear } from './models/TbSchoolYear';
import { TbSchoolYearLoadData } from './models/TbSchoolYearLoadData';
import { TbSonataadminGroup } from './models/TbSonataadminGroup';
import { TbSonataadminService } from './models/TbSonataadminService';
import { TbSonataadminServiceCommission } from './models/TbSonataadminServiceCommission';
import { TbStudent } from './models/TbStudent';
import { TbStudentOfficialSies } from './models/TbStudentOfficialSies';
import { TbStudentSies } from './models/TbStudentSies';
import { TbTerritorialLink } from './models/TbTerritorialLink';
import { TbUserProfile } from './models/TbUserProfile';
import { XalixRol } from './models/XalixRol';
import { XalixRolUsuario } from './models/XalixRolUsuario';
import { XalixUser } from './models/XalixUser';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          type: 'postgres',
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT),
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          logging: true,
          synchronize: false,
          entities: [
            Carrera,
            Estudiante,
            Provincia,
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
          ],
        };
      },
    }),
    EstudianteModule,
    ProvinciaModule,
    CarreraModule,
  ],
})
export class AppModule {}
