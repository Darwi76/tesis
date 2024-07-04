import { Injectable } from '@nestjs/common';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { NomProsecution } from 'src/models/NomProsecution';
import { DataSource, In, Repository } from 'typeorm';
import { NomConvocation } from 'src/models/NomConvocation';
import { TbStudent } from 'src/models/TbStudent';
import { RStudentExaminationExonerated } from 'src/models/RStudentExaminationExonerated';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { RCareerApplicationPreGranted } from 'src/models/RCareerApplicationPreGranted';
import { Interchange } from 'src/models/Interchange.entity';
import { NomCareer } from 'src/models/NomCareer';
import { NomGenderPlacesPlan } from 'src/models/NomGenderPlacesPlan';
import { NomIncomeSource } from 'src/models/NomIncomeSource';
import { TbApplication } from 'src/models/TbApplication';
import { TbAssignment } from 'src/models/TbAssignment';
import { TbAssignmentResultType } from 'src/models/TbAssignmentResultType';
import { TbCes } from 'src/models/TbCes';
import { TbSchoolYear } from 'src/models/TbSchoolYear';

@Injectable()
export class CarreraService {
  constructor(
    @InjectRepository(NomConvocation)
    private readonly convocationRepository: Repository<NomConvocation>,
    @InjectRepository(TbStudent)
    private readonly studentRepository: Repository<TbStudent>,
    @InjectRepository(RStudentExaminationExonerated)
    private readonly exoneratedRepository: Repository<RStudentExaminationExonerated>,
    @InjectRepository(NomProsecution)
    private readonly nomProsecutionRepository: Repository<NomProsecution>,
    @InjectRepository(NomProsecution)
    private readonly resultRepository: Repository<NomProsecution>,
    @InjectRepository(TbAssignmentResultType)
    private readonly typeRepository: Repository<TbAssignmentResultType>,
    @InjectRepository(Interchange)
    private readonly interchangeRepository: Repository<Interchange>,
    @InjectRepository(TbAssignment)
    private readonly assignmentRepository: Repository<TbAssignment>,
    @InjectRepository(TbApplication)
    private readonly aplicationRepository: Repository<TbApplication>,
    @InjectRepository(NomIncomeSource)
    private readonly sourceRepository: Repository<NomIncomeSource>,
    @InjectRepository(NomCareer)
    private readonly careerRepository: Repository<NomCareer>,
    @InjectRepository(NomGenderPlacesPlan)
    private readonly genderRepository: Repository<NomGenderPlacesPlan>,
    @InjectRepository(TbSchoolYear)
    private readonly yearRepository: Repository<TbSchoolYear>,
    @InjectRepository(TbCes)
    private readonly cesRepository: Repository<TbCes>,
    @InjectDataSource() private readonly connection: DataSource,
  ) {}
  create(createCarreraDto: CreateCarreraDto) {
    return 'This action adds a new carrera';
  }

  findAllProsecution() {
    return this.nomProsecutionRepository.find();
  }

  findAllConvocation() {
    return this.convocationRepository.find();
  }

  async findAllStudent() {
    const page = 1;
    const limit = 20;
    const skip = (page - 1) * limit;
    const where: any = {};
    try {
      const [data] = await Promise.all([
        this.connection
          .getRepository(TbStudent)
          .createQueryBuilder('student')
          .where(where)
          .skip(skip)
          .take(limit)
          .getMany(),
        this.connection.getRepository(TbStudent),
      ]);
      return data
    } catch (error) {
      console.log(error);
      throw new ExceptionsHandler(error);
    }
  }

  findAllExonerated() {
    return this.exoneratedRepository.find();
  }

  findAllYear() {
    return this.yearRepository.find();
  }

  async findAllResult(): Promise<any[]> {
    const page = 1;
    const limit = 20;
    const skip = (page - 1) * limit;
    const where: any = {};
    try {
      const [data] = await Promise.all([
        this.connection
          .getRepository(RCareerApplicationPreGranted)
          .createQueryBuilder('r_career_application_pre_granted')
          .addSelect(['r_career_application_pre_granted.assignmentResultType'])
          .leftJoin(
            'r_career_application_pre_granted.application2',
            'application2',
          )
          .addSelect(['application2.assignmentResultType'])
          .leftJoin(
            'r_career_application_pre_granted.careerApplication2',
            'careerApplication2',
          )
          .addSelect(['careerApplication2.orderCareer'])
          .leftJoin('application2.student', 'student')
          .addSelect([
            'student.ci',
            'student.name',
            'student.lastname',
            'student.provenanceTypeId',
            'student.nuevoAcademicIndex',
            'student.incomeSourceId',
          ])
          .leftJoin(
            'r_career_application_pre_granted.careerApplication2',
            'career_application',
          )
          .addSelect('career_application.orderCareer')
          .leftJoin('r_career_application_pre_granted.ces2', 'ces2')
          .addSelect('ces2.name')
          .where(where)
          .skip(skip)
          .take(limit)
          .getMany(),
        this.connection.getRepository(RCareerApplicationPreGranted),
      ]);
      const type = [...new Set(data.map((item) => item.assignmentResultType))];
      const types = await this.typeRepository.find({
        where: { id: In(type) },
      });

      const typeDetailsMap = new Map(
        types.map((type) => [type.id, { ...type, type: type.name }]),
      );

      const typeWithDetails = data.map((item) => ({
        ...item,
        ...typeDetailsMap.get(item.assignmentResultType),
        id: item.id,
      }));

      const incomeSourceIds = [
        ...new Set(
          data.map((student) => student.application2.student.incomeSourceId),
        ),
      ];
      const sources = await this.sourceRepository.find({
        where: { id: In(incomeSourceIds) },
      });

      const sourceDetailsMap = new Map(
        sources.map((type) => [type.id, { ...type, proveniente: type.name }]),
      );

      console.log(sourceDetailsMap);
      const allWithDetails = typeWithDetails.map((item) => ({
        ...item,
        ...sourceDetailsMap.get(item.application2.student.incomeSourceId),
        id: item.id,
      }));
      return allWithDetails;
    } catch (error) {
      console.log(error);
      throw new ExceptionsHandler(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} carrera`;
  }

  update(id: number, updateCarreraDto: UpdateCarreraDto) {
    return `This action updates a #${id} carrera`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrera`;
  }
}
