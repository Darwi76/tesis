import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante, Provincia } from 'src/models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
    @InjectRepository(Provincia)
    private readonly provinciaRepository: Repository<Provincia>,
  ) {}

  async create(createEstudianteDto: CreateEstudianteDto) {
    const estudiante = new Estudiante();
    estudiante.nombre = createEstudianteDto.nombre
    estudiante.apellidos = createEstudianteDto.apellidos
    estudiante.email = createEstudianteDto.email
    estudiante.telefono = createEstudianteDto.telefono
    estudiante.exoneradoasignatura = createEstudianteDto.exonedaro
    estudiante.nota = createEstudianteDto.nota
    estudiante.periododeingreso = createEstudianteDto.periodo_ingreso

    const provinceId = createEstudianteDto.provinciaId;
    estudiante.provincia = await this.provinciaRepository.findOneBy({id: provinceId});

    return this.estudianteRepository.save(estudiante);
  }

  async findAll(provincia: string) {
    console.log(provincia);
    const province = await this.estudianteRepository.find({
      relations: ['provincia'],
    });

    if (provincia) {
      province.filter(province => province.provincia.nombre == provincia);
    }
    return province;
  }

  findOne(id: number) {
    return `This action returns a #${id} estudiante`;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
